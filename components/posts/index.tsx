import EmptySvg from "@/components/posts/assets/EmptySvg";
import ScrollIntoView from "react-scroll-into-view";

const Posts = () => {
  return (
    <div className="mt-12 flex min-h-[calc(100vh-68px)] flex-col items-center justify-center border-t border-gray-200 bg-white/50 backdrop-blur-xl">
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
    </div>
  );
};

export default Posts;
