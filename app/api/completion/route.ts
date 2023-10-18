import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  let style = "educational (Informative and knowledge-focused)";

  if (prompt.style === "educational") {
    style = "educational (Informative and knowledge-focused)";
  } else if (prompt.style === "concrete") {
    style = "concrete (Clear and specific with real examples)";
  } else if (prompt.style === "formal") {
    style = "formal (Traditional, professional, and structured)";
  } else if (prompt.style === "fun") {
    style = "fun (Lively, engaging, and enjoyable)";
  } else if (prompt.style === "modern") {
    style = "modern (Contemporary and up-to-date)";
  } else if (prompt.style === "playful") {
    style = "playful (Interactive and enjoyable)";
  }

  console.log(prompt.style, prompt.text);

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are a Linkedin post writer. Reply with a very short linkedin post (150 words max). Write a post in the "${style}" style.`,
      },
      { role: "user", content: prompt.text },
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
