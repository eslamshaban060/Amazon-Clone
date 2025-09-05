"use client";
import { useEffect, useState } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
// Image paths from public folder
const eg = "/footer/eg.png";
const us = "/footer/united-states.png";
const amazonLogo = "/footer/Amazon.png";
// -------------------
// Types
// -------------------
interface Country {
  name: string;
  flag: string; // imported images resolve to string (image path)
}

// -------------------
// Static Data
// -------------------
const countries: Country[] = [
  { name: "Egypt", flag: eg },
  { name: "USA", flag: us },
];

const languages: string[] = ["English - en", "Arabic - ar"];

// -------------------
// Footer Component
// -------------------
const Footer: React.FC = () => {
  // States
  const [lang, setLang] = useState<string>("English - en");
  const [showLang, setShowLang] = useState<boolean>(false);
  const [country, setCountry] = useState<Country>({ name: "Egypt", flag: eg });
  const [showCountry, setShowCountry] = useState<boolean>(false);

  // Close dropdown after selecting an option
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLang(false);
      setShowCountry(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [lang, country]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".lang")) {
        setShowLang(false);
      }
      if (!target.closest(".country")) {
        setShowCountry(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <footer className="flex flex-col text-white" id="navFooter">
      {/* Back to top */}
      <a
        href="#"
        className="w-full h-[60px] flex justify-center items-center bg-[var(--gray-light)] font-[500] text-lg leading-[100%]"
      >
        Back to Top
      </a>

      {/* Mid section */}
      <div className="mid w-full bg-[var(--gray-dark)]">
        {/* Top links */}
        <div className="foot-services max-w-[1024px] mx-auto p-10">
          <div className="row flex flex-wrap justify-between gap-10">
            {/* Column 1 */}
            <div className="col w-40 flex flex-col gap-1">
              <h3 className="font-[700] text-[16px] whitespace-nowrap">
                Get to Know Us
              </h3>
              <ul className="flex flex-col gap-0 text-[14px] font-[300]">
                <li className="cursor-pointer hover:underline">About us</li>
                <li className="cursor-pointer hover:underline">Careers</li>
                <li className="cursor-pointer hover:underline">Blog</li>
                <li className="cursor-pointer hover:underline">
                  Press releases
                </li>
                <li className="cursor-pointer hover:underline">
                  Amazon Science
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col w-40 flex flex-col gap-1">
              <h3 className="font-[700] text-[16px] whitespace-nowrap">
                Connect with Us
              </h3>
              <ul className="flex flex-col gap-0 text-[14px] font-[300]">
                <li className="cursor-pointer hover:underline">Facebook</li>
                <li className="cursor-pointer hover:underline">Twitter</li>
                <li className="cursor-pointer hover:underline">Instagram</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col w-40 flex flex-col gap-1">
              <h3 className="font-[700] text-[16px] whitespace-nowrap">
                Make Money with Us
              </h3>
              <ul className="flex flex-col gap-0 text-[14px] font-[300]">
                <li className="cursor-pointer hover:underline">
                  Sell on Amazon
                </li>
                <li className="cursor-pointer hover:underline">
                  Sell under Amazon Accelerator
                </li>
                <li className="cursor-pointer hover:underline">
                  Protect and Build Your Brand
                </li>
                <li className="cursor-pointer hover:underline">
                  Amazon Global Selling
                </li>
                <li className="cursor-pointer hover:underline">
                  Become an Affiliate
                </li>
                <li className="cursor-pointer hover:underline">
                  Fulfilment by Amazon
                </li>
                <li className="cursor-pointer hover:underline">
                  Advertise Your Products
                </li>
                <li className="cursor-pointer hover:underline">
                  Amazon Pay on Merchants
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col w-40 flex flex-col gap-1">
              <h3 className="font-[700] text-[16px] whitespace-nowrap">
                Let Us Help You
              </h3>
              <ul className="flex flex-col gap-0 text-[14px] font-[300]">
                <li className="cursor-pointer hover:underline">Your Account</li>
                <li className="cursor-pointer hover:underline">
                  Returns Centre
                </li>
                <li className="cursor-pointer hover:underline">
                  Recalls and Products Safety Alerts
                </li>
                <li className="cursor-pointer hover:underline">
                  100% Purchase Protection
                </li>
                <li className="cursor-pointer hover:underline">
                  Amazon App Download
                </li>
                <li className="cursor-pointer hover:underline">Help</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="text-[#4C4C4C]" />

        {/* Middle logo and dropdowns */}
        <div className="foot-middle p-5 max-w-[1024px] mx-auto flex flex-wrap justify-center items-center gap-5">
          {/* Logo */}
          <div className="logo">
            <img src={amazonLogo} alt="amazon logo" className="w-32" />
          </div>

          {/* Language selector */}
          <div
            onClick={() => setShowLang((prev) => !prev)}
            className="lang relative flex items-center gap-2 border border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-700 transition-colors"
          >
            <p className="flex items-center gap-2">
              <span className="w-5 flex justify-center items-center">
                <FaGlobe className="w-full h-full" suppressHydrationWarning />
              </span>
              {lang}
            </p>
            <button>
              <FaChevronDown suppressHydrationWarning />
            </button>
            <div
              className={`lang-dropdown p-5 w-[150%] bg-white text-black absolute top-[150%] rounded-xl left-[-20%] flex-col before:border-transparent before:border-b-white before:border-[16px] before:top-[-22%] before:left-[50%] before:z-30 z-30 before:absolute before:size-8 ${
                showLang ? "flex" : "hidden"
              }`}
            >
              {languages.map((l) => (
                <p
                  className="hover:bg-black/5 w-full p-2 flex items-center gap-2 not-last:border-b"
                  onClick={() => setLang(l)}
                  key={l}
                >
                  {l}
                </p>
              ))}
            </div>
          </div>

          {/* Country selector */}
          <div
            onClick={() => setShowCountry((prev) => !prev)}
            className="country relative flex items-center gap-2 border border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center gap-2">
              <img src={country.flag} alt="country flag" className="w-6 h-4" />
              <span>{country.name}</span>
            </div>
            <button>
              <FaChevronDown suppressHydrationWarning />
            </button>
            <div
              className={`country-dropdown p-5 w-[150%] bg-white text-black absolute top-[150%] rounded-xl left-[-20%] flex-col before:border-transparent before:border-b-white before:border-[16px] before:top-[-22%] before:left-[50%] before:z-20 before:absolute before:size-8 ${
                showCountry ? "flex" : "hidden"
              }`}
            >
              {countries.map((c) => (
                <p
                  className="hover:bg-black/5 w-full p-2 flex items-center gap-2 not-last:border-b"
                  onClick={() => setCountry(c)}
                  key={c.name}
                >
                  <img src={c.flag} alt="country flag" className="w-6 h-4" />
                  {c.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* End section */}
      <div className="end w-full bg-[var(--black)] py-5 px-10">
        <div className="foot-more max-w-[1024px] mx-auto mb-10">
          <div className="row flex flex-col items-start gap-5">
            <ul className="flex gap-10 w-full justify-between sm:flex-nowrap flex-wrap">
              <li className="w-32">
                <a
                  href="#"
                  className="flex flex-col font-[500] text-sm hover:underline"
                >
                  <h5>AbeBooks</h5>
                  <span className="text-[#999] hover:underline font-[300]">
                    Books, art & collectibles
                  </span>
                </a>
              </li>
              <li className="w-32">
                <a
                  href="#"
                  className="flex flex-col font-[500] text-sm hover:underline"
                >
                  <h5>Amazon Web Services</h5>
                  <span className="text-[#999] hover:underline font-[300]">
                    Scalable Cloud Computing Services
                  </span>
                </a>
              </li>
              <li className="w-32">
                <a
                  href="#"
                  className="flex flex-col font-[500] text-sm hover:underline"
                >
                  <h5>Audible</h5>
                  <span className="text-[#999] hover:underline font-[300]">
                    Download Audio Books
                  </span>
                </a>
              </li>
              <li className="w-32">
                <a
                  href="#"
                  className="flex flex-col font-[500] text-sm hover:underline"
                >
                  <h5>IMDb</h5>
                  <span className="text-[#999] hover:underline font-[300]">
                    Movies, TV & Celebrities
                  </span>
                </a>
              </li>
            </ul>
            <ul className="flex gap-10 w-full justify-between sm:flex-nowrap flex-wrap">
              <li className="w-32">
                <a
                  href="#"
                  className="flex flex-col font-[500] text-sm hover:underline"
                >
                  <h5>Shop bop</h5>
                  <span className="text-[#999] hover:underline font-[300]">
                    Designer Fashion Brands
                  </span>
                </a>
              </li>
              <li className="w-32">
                <a
                  href="#"
                  className="flex flex-col font-[500] text-sm hover:underline"
                >
                  <h5>Amazon Business</h5>
                  <span className="text-[#999] hover:underline font-[300]">
                    Everything For Your Business
                  </span>
                </a>
              </li>
              <li className="w-32">
                <a
                  href="#"
                  className="flex flex-col font-[500] text-sm hover:underline"
                >
                  <h5>Prime Now</h5>
                  <span className="text-[#999] hover:underline font-[300]">
                    2-Hour Delivery on Everyday Items
                  </span>
                </a>
              </li>
              <li className="w-32">
                <a
                  href="#"
                  className="flex flex-col font-[500] text-sm hover:underline"
                >
                  <h5>Amazon Prime Music</h5>
                  <span className="text-[#999] font-[300] hover:underline">
                    100 million sings, ad-free Over 15 million podcast episodes
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom max-w-[1024px] mx-auto flex flex-col gap-2.5 text-white text-sm font-[400] items-center">
          <ul className="flex gap-5 flex-wrap justify-center">
            <li>Conditions of Use & Sale</li>
            <li>Privacy Notice</li>
            <li>Interest-Based Ads</li>
          </ul>
          <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
