'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex justify-between py-8">
      <Link href="/">
        <img
          src="/logo.svg"
          alt="logo"
          className="md:w-[237px] md:h-[25px] w-[168px] h-[20px]"
        />
      </Link>
      <nav role="navigation" className="block min-[380px]:hidden">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About us</li>
            </a>
            <a href="/about">
              <li>Shop</li>
            </a>
            <a href="/about">
              <li>Blog</li>
            </a>
            <a href="#">
              <button className="py-2 px-4 mt-8">Create your plan</button>
            </a>
          </ul>
        </div>
      </nav>
      {/* <Link href="/about">About</Link> */}
    </div>
  );
}
