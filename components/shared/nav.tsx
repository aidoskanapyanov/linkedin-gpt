import { ChatGPT, Linkedin } from "@/components/shared/icons";
import { Plus } from "lucide-react";

const Nav = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-1">
        <ChatGPT className="-m-2 h-12 w-12" />
        <Plus />
        <Linkedin className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Nav;
