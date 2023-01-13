import { Navbar } from "../components";
import CardsWhyUs from "../components/CardsWhyUs";
import { OurCollection, WhyUs, Hero, HowItWorks, Footer } from "../sections";

const Page = () => (
  <div className=" flex flex-col px-10">
    <Navbar />
    <Hero />
    <OurCollection />
    <WhyUs />
    <CardsWhyUs />
    <HowItWorks />
    <Footer />
  </div>
);

export default Page;
