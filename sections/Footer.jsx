import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="rounded-t-xl flex flex-col md:flex-row items-center justify-around bg-darkBlue py-12 mt-12 gap-8">
      <Image src="/footer-logo.svg" width={200} height={25} />
      <div className="flex flex-col md:flex-row md: items-center text-sm font-extrabold text-gray gap-4">
        <Link href="/" className="hover:text-white transition duration-200">
          HOME
        </Link>
        <Link href="/" className="hover:text-white transition duration-200">
          ABOUT
        </Link>
        <Link href="/" className="hover:text-white transition duration-200">
          CREATE PLAN
        </Link>
      </div>
      <button className="py-2 px-4">Create your plan</button>
    </section>
  );
}
