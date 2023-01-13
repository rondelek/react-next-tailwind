'use client';

export default function About() {
  return (
    <section className="rounded-xl p-10 lg:bg-about-lg bg-right md:bg-about-md bg-about-sm bg-cover">
      <div className="text-center md:text-left md:max-w-[50%] my-10">
        <h1 className="text-4xl font-bold text-white">About us </h1>
        <p className="text-md md:text-lg text-gray py-6">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
}
