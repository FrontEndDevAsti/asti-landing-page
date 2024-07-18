'use client';

import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-4">
        <div className="flex lg:flex-1 pl-0 lg:pl-40">
          <a href="/" className="-m-1.5 p-1.5">
            <Image src="/images/asti.webp" alt="log" width={130} height={8}/>
          </a>
        </div>
      </nav>
    </header>
  );
}
