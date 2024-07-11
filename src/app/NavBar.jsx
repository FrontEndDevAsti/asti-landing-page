'use client';

export default function NavBar() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              alt=""
              src="https://asti.academy/assets/images/latest/asti.webp"
              className="h-8 w-auto"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
