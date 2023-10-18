import { Linkedin } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const IntroducingTag = () => {
  return (
    <Link
      href={
        "https://www.linkedin.com/posts/aidos-kanapyanov_linkedingpt-activity-7120362234316279808-Gn-t"
      }
      target="_blank"
    >
      <Button className="rounded-full bg-blue-100 px-6 text-blue-700 hover:bg-blue-200">
        <Linkedin className="mr-2 h-4 w-4" />
        Introducing LinkedInGPT
      </Button>
    </Link>
  );
};

export default IntroducingTag;
