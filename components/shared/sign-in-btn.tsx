import { ChatGPT, Linkedin } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const SignInBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-6" size={"sm"}>
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-x-hidden p-10">
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
        <div className="-mx-10 -mb-10 flex h-24 flex-col items-center justify-center border-t bg-gray-50">
          <Button variant={"outline"} className="font-normal">
            <Linkedin className="mr-2 h-4 w-4" /> Sign in with LinkedIn
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInBtn;
