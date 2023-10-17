import { ChatGPT, Github, Linkedin } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LogIn, Plus } from "lucide-react";
import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="md:rounded-full md:px-6" size={"sm"}>
          <span className="hidden md:block">Sign in</span>
          <LogIn className="block h-4 w-4 md:hidden" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs overflow-x-hidden p-10 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-4 text-center text-2xl font-bold">
            <div className="flex items-center justify-center gap-1 pb-4">
              <Linkedin className="h-8 w-8" />
              <Plus />
              <ChatGPT className="-m-2 h-12 w-12 fill-[#518275]" />
            </div>
            Sign in
          </DialogTitle>
          <DialogDescription className="text-center">
            Sign in via your LinkedIn account to get started.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-10 -mb-10 flex h-40 flex-col items-center justify-center border-t bg-gray-50">
          <Button
            variant={"outline"}
            className="font-normal"
            onClick={() => signIn("linkedin", { redirect: false })}
          >
            <Linkedin className="mr-2 h-4 w-4" /> Sign in with LinkedIn
          </Button>
          <Button
            variant={"outline"}
            className="mt-2 font-normal"
            onClick={() => signIn("github", { redirect: false })}
          >
            <Github className="mr-2 h-4 w-4" /> Sign in with Github
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInBtn;
