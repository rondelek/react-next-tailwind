import { OurCollection, WhyUs, Hero, HowItWorks } from '../sections';
import { CardsWhyUs } from '../components';

const Page = () => (
  <div>
    <Hero />
    <OurCollection />
    <WhyUs />
    <CardsWhyUs />
    <HowItWorks />
  </div>
);

export default Page;
