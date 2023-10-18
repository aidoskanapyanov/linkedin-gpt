import EmptySvg from "@/components/posts/assets/EmptySvg";
import ScrollIntoView from "react-scroll-into-view";

interface Props {
  completion: string;
  isLoading: boolean;
}

const Posts = ({ completion, isLoading }: Props) => {
  return (
    <div className="mt-12 flex min-h-[calc(100vh-68px)] flex-col items-center justify-center border-t border-gray-200 bg-white/50 px-4 py-12 backdrop-blur-xl">
      <div className="invisible" id="post" />
      {completion || isLoading ? (
        <>
          <div className="text-center text-3xl font-semibold lg:text-4xl">
            <span
              className="bg-gradient-to-br from-[#007EBB] to-[#1CA583] bg-clip-text text-transparent hover:cursor-pointer"
              onClick={undefined}
            >
              Generated
            </span>{" "}
            post:
          </div>
          <div className="mx-auto my-6 max-w-screen-md whitespace-pre-wrap rounded-lg border bg-white p-10 py-12 text-sm lg:text-base">
            {completion}
          </div>
        </>
      ) : (
        <>
          <div className="text-center text-lg font-semibold">
            No saved posts yet.{" "}
            <ScrollIntoView
              selector="#form"
              className="inline decoration-[#007EBB] hover:underline"
            >
              <span
                className="bg-gradient-to-br from-[#007EBB] to-[#1CA583] bg-clip-text text-transparent hover:cursor-pointer"
                onClick={undefined}
              >
                Generate
              </span>
            </ScrollIntoView>{" "}
            some!
          </div>
          <EmptySvg className="h-64" />
        </>
      )}
    </div>
  );
};

export default Posts;
