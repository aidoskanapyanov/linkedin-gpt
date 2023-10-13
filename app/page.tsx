import IntroducingTag from "@/components/hero/introducing-tag";
import Subtitle from "@/components/hero/subtitle";
import Title from "@/components/hero/title";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start py-16">
      <div className="pb-8">
        <IntroducingTag />
      </div>
      <Title />
      <Subtitle />
    </div>
  );
}
