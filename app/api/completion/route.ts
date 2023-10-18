import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

interface StyleMap {
  [key: string]: string;
}

export async function POST(req: Request) {
  if (
    process.env.NODE_ENV !== "development" &&
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  ) {
    const ip = req.headers.get("x-forwarded-for");
    const ratelimit = new Ratelimit({
      redis: kv,
      limiter: Ratelimit.slidingWindow(5, "24h"),
    });

    const { success, limit, reset, remaining } = await ratelimit.limit(
      `ratelimit_${ip}`,
    );

    if (!success) {
      return new Response("You have reached your request limit for the day.", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      });
    }
  }

  const { prompt, style } = await req.json();

  const styleMap: StyleMap = {
    educational: "educational (Informative and knowledge-focused)",
    concrete: "concrete (Clear and specific with real examples)",
    formal: "formal (Traditional, professional, and structured)",
    fun: "fun (Lively, engaging, and enjoyable)",
    modern: "modern (Contemporary and up-to-date)",
    playful: "playful (Interactive and enjoyable)",
  };

  const styleDescr = styleMap[style]
    ? styleMap[style]
    : styleMap["educational"];

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are a Linkedin post writer. Reply with a very short linkedin post (150 words max). Write a post in the "${styleDescr}" style.`,
      },
      { role: "user", content: prompt },
    ],
    stream: true,
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
