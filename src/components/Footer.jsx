import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F2F7FF] py-8 mt-10 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        
        {/* Logo and Links */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a href="/">
            <img
              className="h-[100px] w-[120px] object-contain"
              src="/logo.png"
              alt="Logo"
            />
          </a>

          <ul className="flex items-center gap-6">
            <li>
              <a
                className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-primary-end hover:text-primary-start transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-primary-end hover:text-primary-start transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-primary-end hover:text-primary-start transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-primary-end hover:text-primary-start transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-para opacity-80 mt-6">
        © {new Date().getFullYear()} BinByte. All rights reserved.
      </div>
    </footer>
  );
}
