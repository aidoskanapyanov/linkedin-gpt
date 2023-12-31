"use client";

import { ChatGPT, Linkedin } from "@/components/shared/icons";
import SignInBtn from "@/components/shared/sign-in-btn";
import UserBtn from "@/components/shared/user-btn";
import useScroll from "@/lib/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";

const Nav = () => {
  const scrolled = useScroll(50);
  const { data: session, status } = useSession();

  return (
    <div
      className={cn(
        "fixed top-0 z-10 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0",
      )}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <div className="flex items-center justify-center gap-1">
          <Linkedin className="h-8 w-8" />
          <Plus />
          <ChatGPT className="-m-2 h-12 w-12 fill-[#518275]" />
          <span className="ml-2 font-display text-2xl">LinkedInGPT</span>
        </div>
        <div>
          {status === "authenticated" ? (
            <UserBtn user={session.user} />
          ) : (
            <SignInBtn />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
