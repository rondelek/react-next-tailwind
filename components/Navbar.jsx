'use client';

import Link from 'next/link';

export default function Navbar() {
  const burger =
    'min-w-[700px] pr-[100px] mr-[0px] -mt-[70px] min-[470px]:pl-[300px] pl-[400px] pt-[80px] pb-[400px]';

  return (
    <div className="flex justify-between py-8">
      <Link href="/">
        <img
          src="/logo.svg"
          alt="logo"
          className="md:w-[237px] md:h-[25px] w-[168px] h-[20px]"
        />
      </Link>

      <nav className="hidden sm:flex items-end uppercase text-xs text-darkGray gap-8">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About us</p>
        </Link>
        <Link href="/plan">
          <p>Create your plan</p>
        </Link>
      </nav>

      <nav role="navigation" className="block sm:hidden">
        <div id="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu" className={burger}>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About us</li>
            </a>
            <a href="/plan">
              <button className="py-2 px-4 mt-8">Create your plan</button>
            </a>
          </ul>
        </div>
      </nav>
      {/* <Link href="/about">About</Link> */}
    </div>
  );
}
