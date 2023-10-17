import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const FeedbackCard = ({
  name,
  username,
  comment,
  imageUrl,
}: {
  name: string;
  username: string;
  comment: string;
  imageUrl?: string;
}) => {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="flex items-center justify-start gap-2 pb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="profile-pic"
            className="h-12 w-12 flex-none rounded-full object-contain"
          />
        ) : (
          <div className="h-12 w-12 flex-none rounded-full bg-gray-200" />
        )}
        <div className="flex flex-col items-start justify-center text-sm">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-600">{username}</p>
        </div>
      </div>
      <div>{comment}</div>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className="min-h-[calc(100vh-68px)] border-t border-gray-200 bg-blue-50/50 p-4 py-20 backdrop-blur-xl">
      <h2 className="pb-6 text-center font-display text-2xl font-bold tracking-[-0.02em] drop-shadow-sm sm:text-4xl">
        Over{" "}
        <span className="bg-gradient-to-r from-[#007EBB] to-[#1CA583] bg-clip-text text-transparent">
          1.8M{/* */} posts
        </span>{" "}
        {/* */}generated
      </h2>
      <div className="pb-12 text-center text-gray-600 [text-wrap:balance] md:text-xl">
        Check out what our happy users are saying about LinkedInGPT
      </div>
      <div className="mx-auto max-w-screen-lg">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="0.5rem">
            <FeedbackCard
              name="Theo"
              username="@t3dotgg"
              comment="Why don't we just use ChatGPT?"
              imageUrl="https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_normal.jpg"
            />
            <FeedbackCard
              name="ThePrimeagen"
              username="@ThePrimeagen"
              comment="I use dvorak btw"
              imageUrl="https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp"
            />
            <FeedbackCard
              name="tslamoon"
              username="@tslamoon1"
              comment="Because who needs real posts and authentic ideas when you can just automate it?"
              imageUrl="https://pbs.twimg.com/profile_images/1679868769584447489/cbEZlJOP_x96.jpg"
            />
            <FeedbackCard
              name="Youtube Commenter"
              username="@dont_know"
              comment="I hate LinkedInGPT"
            />
            <FeedbackCard
              name="TheTechLead"
              username="@the_tech_lead"
              comment="I can finally automate my LinkedIn posts! (as a millionaire)"
              imageUrl="https://yt3.googleusercontent.com/ytc/APkrFKZViPM10GrZVUiUhH2Dn_2yQhTpAr2zbtnGFhFK_g=s176-c-k-c0x00ffffff-no-rj"
            />
            <FeedbackCard
              name="Mistral AI"
              username="@mistral_ai"
              comment="I hate LinkedInGPT so much that I wrote my own LLM model."
              imageUrl="https://mistral.ai/images/logo_hubc88c4ece131b91c7cb753f40e9e1cc5_2589_256x0_resize_q97_h2_lanczos_3.webp"
            />
            <FeedbackCard
              name="John Doe"
              username="@johnathan_doe"
              comment="It's not yet production ready"
            />
            <FeedbackCard
              name="Angular dev"
              username="@angular_dev"
              comment="Why don't you use Angular? Because that's what real developers use."
              imageUrl="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
            />
            <FeedbackCard
              name="I use Arch btw"
              username="@i_use_arch"
              comment="Did you use Arch btw?"
            />
            <FeedbackCard
              name="Regular Twitter Comment"
              username="@dont_know"
              comment="I was really struggling with my lack of originality on LinkedIn, so thank goodness for LinkedInGPT to help me churn out generic, cliché posts like a pro."
            />
            <FeedbackCard
              name="Me"
              username="@aidos.kanapyanov"
              comment="Should've bought bitcoin when it was $1"
              imageUrl="https://avatars.githubusercontent.com/u/65722512?v=4"
            />
            <FeedbackCard
              name="Senior PHP Dev"
              username="@php_is_my_bread"
              comment="Next.js is doing what php did in 2007"
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/182px-PHP-logo.svg.png"
            />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Feedback;
