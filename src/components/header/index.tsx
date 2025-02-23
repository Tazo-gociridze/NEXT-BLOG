'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiPencilAlt } from 'react-icons/hi';

export default function Header() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <header className="fixed left-0 top-0 flex h-20 w-full items-center justify-between bg-[#f1f0f0] px-48">
      <Link href={'/'}>
        <h1 className="text-gray flex items-center gap-x-2 text-2xl">
          <span>
            <span className="merienda-uniquifier">
              <span className="text-red-700">Next</span>Blog
            </span>
          </span>
          <HiPencilAlt />
        </h1>
      </Link>

      <nav className="">
        <ul className="text-gray flex gap-x-8 *:cursor-pointer">
          <Link className={pathname === '/' ? 'text-red-700 underline' : ''} href={'/'}>
            <li>Home</li>
          </Link>
          <Link className={pathname === '/about' ? 'text-red-700 underline' : ''} href={'/about'}>
            <li>About</li>
          </Link>
          <Link className={pathname === '/blogs' ? 'text-red-700 underline' : ''} href={'/blogs'}>
            <li>Blogs</li>
          </Link>
        </ul>
      </nav>
      <div>
        <button className="text-gray text-xl">Login</button>
      </div>
    </header>
  );
}
