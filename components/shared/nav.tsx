import { ChatGPT, Github, Linkedin } from "@/components/shared/icons";
import { Plus } from "lucide-react";

const Nav = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center gap-1">
          <Linkedin className="h-8 w-8" />
          <Plus />
          <ChatGPT className="-m-2 h-12 w-12 fill-[#518275]" />
          <span className="font-display ml-2 text-2xl">LinkedinGPT</span>
        </div>
        <div>
          <Github className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
