import { Linkedin } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import React from "react";

const IntroducingTag = () => {
  return (
    <Button className="rounded-full bg-blue-100 px-6 text-blue-700 hover:bg-blue-200">
      <Linkedin className="mr-2 h-4 w-4" />
      Introducing LinkedinGPT
    </Button>
  );
};

export default IntroducingTag;
