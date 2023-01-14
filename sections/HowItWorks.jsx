import { CardsHowItWorks } from '../components';

export default function HowItWorks() {
  return (
    <section className="lg:text-left text-center">
      <h2 className="text-center text-gray font-bold text-4xl pb-12">
        How it works
      </h2>
      <CardsHowItWorks />
      <button className="max-w-[400px] lg:ml-8 my-4">Choose your plan</button>
    </section>
  );
}
