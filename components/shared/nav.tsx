import { ChatGPT, Github, Linkedin } from "@/components/shared/icons";
import { Plus } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center justify-center gap-1">
        <ChatGPT className="-m-2 h-12 w-12" />
        <Plus />
        <Linkedin className="h-8 w-8" />
        <span className="font-display text-2xl">LinkedinGPT</span>
      </div>
      <div>
        <Github className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Nav;
