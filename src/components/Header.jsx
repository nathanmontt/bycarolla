function Header() {
  return (
    <header className="border-b border-neutral-200 sticky top-0 bg-white z-20 py-3 md:py-4">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-center">
        <a
          href="https://www.instagram.com/bycarollaa/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <img
            src="/images/logo.png"
            srcSet="/images/logo.png 1x, /images/logo.png 2x, /images/logo.png 3x"
            sizes="(max-width: 640px) 35vw, (max-width: 1024px) 22vw, 12vw"
            alt="byCarolla Logo"
            className="block h-[clamp(56px,10vw,140px)] w-auto"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;