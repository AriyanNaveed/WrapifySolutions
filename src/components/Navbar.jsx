import "boxicons/css/boxicons.min.css";
const Navbar = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-3xl lg:text-3xl font-light text-white m-0"
      >
        Wrapify<span className="text-purple-400">Solutions</span>
      </h1>
      <nav className="hidden md:flex items-center   lg:gap-10 md-gap-4 sm:gap-4">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Home
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          About
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Services
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Projects
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Contact
        </a>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black py-2 px-4 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        Get in touch
      </button>
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2 text-3xl text-white z-50"
      >
        <i class="bx bx-menu"></i>
      </button>
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Home
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            About
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Services
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Projects
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
