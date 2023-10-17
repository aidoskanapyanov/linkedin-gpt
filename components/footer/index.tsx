import BuyMeACoffee from "@/components/footer/icons/buymeacoffee";

const Footer = () => {
  return (
    <div className="bg-blue-50/50 p-4 py-6 backdrop-blur-xl">
      <div className="w-full py-5 text-center">
        <p className="text-gray-500">
          A project by{" "}
          <a
            className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
            href="https://www.linkedin.com/in/aidos-kanapyanov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aidos Kanapyanov
          </a>
        </p>
        <a
          href="https://www.buymeacoffee.com/aidosk"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
        >
          <BuyMeACoffee className="h-6 w-6" />
          <p className="font-medium text-gray-600">Buy me a coffee</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
