import dynamic from "next/dynamic";
const LandingPage = dynamic(() => import("@/components/LandingPage"));
const Page2 = dynamic(() => import("@/components/Page2"));
const Page3 = dynamic(() => import("@/components/Page3"));
const Page4 = dynamic(() => import("@/components/Page4"));
const Page5 = dynamic(() => import("@/components/Page5"));
const Page6 = dynamic(() => import("@/components/Page6"));

export const metadata = {
  title: "Home",
};

const page = () => {
  return (
    <>
      <LandingPage />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </>
  );
};

export default page;
