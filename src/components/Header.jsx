function Header() {
  return (
    <header className="border-b border-neutral-200 sticky top-0 bg-white z-20 h-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-center relative">
        <a
          href="https://www.instagram.com/bycarolla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-black absolute left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <img src="/logo-bycarolla.png" alt="BYCAROLLA Logo" className="h-8 w-auto" />
        </a>
      </div>
    </header>
  );
}

export default Header;