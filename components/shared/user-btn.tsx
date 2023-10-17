import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface User {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const UserBtn = ({ user }: User) => {
  return (
    <Popover>
      <PopoverTrigger>
        <img src={user!.image!} className="h-10 w-10 rounded-full" />
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end">
        <div className="px-3 text-sm font-semibold">{user?.name}</div>
        <div className="px-3 pb-2 text-sm text-gray-600">{user?.email}</div>
        <Button variant={"ghost"} size={"sm"} onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default UserBtn;
