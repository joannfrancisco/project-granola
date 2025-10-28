"use client";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    {
      name: "WHOLE FOODS",
      dropdown: [
        "WHAT ARE WHOLE FOODS?",
        "WHAT WHOLE FOODS DO FOR YOU",
        "THE FUTURE IS WHOLE FOODS",
      ],
    },
    {
      name: "ABOUT US",
      dropdown: ["ABOUT US", "OUR STORY", "THE TEAM", "FAQ"],
    },
    {
      name: "PRODUCTS",
      dropdown: ["BREAD", "CRACKERS", "GRANOLA", "CRUNCHY MUESLI BAR"],
    },
    { name: "RECIPES", dropdown: [] },
    { name: "BLOG", dropdown: [] },
    { name: "CONTACT", dropdown: [] },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="w-screen text-left xl:text-center fixed z-50 bg-[var(--background)] ">
      <nav
        className="w-full mx-auto max-w-[1536px] h-[80px] flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-8 text-[var(--foreground)]"
        style={{ fontFamily: "var(--font-chau-philomene-one)" }}
      >
        {/* Logo */}
        <div className="flex font-bold text-[28px] md:text-[36px] lg:text-[40px] tracking-wide cursor-pointer z-50">
          gr
          <span className="text-[32px] md:text-[40px] lg:text-[45px] font-normal">
            8
          </span>
          nola
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex gap-4 xl:gap-6">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    {link.dropdown.length > 0 ? (
                      <>
                        <NavigationMenuTrigger className="font-medium text-base md:text-xl hover:opacity-80 transition cursor-pointer">
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent
                          className="absolute left-1/2 -translate-x-1/2 mt-3
                            hidden group-hover:flex flex-col
                            bg-[var(--foreground)] text-[var(--background)]
                            rounded-lg shadow-lg py-2 px-0 text-left z-10
                            before:content-[''] before:absolute before:top-[-8px] before:left-1/3 before:-translate-x-1/2
                            before:w-0 before:h-0 before:border-l-[8px] before:border-r-[8px]
                            before:border-b-[8px] before:border-l-transparent before:border-r-transparent 
                            before:border-b-[var(--foreground)]"
                        >
                          <ul className="grid gap-2 px-2 py-4 min-w-max">
                            {link.dropdown.map((item, i) => (
                              <li key={i}>
                                <NavigationMenuLink
                                  className="block px-2 py-1 rounded-md text-base md:text-xl
                                    hover:bg-[var(--background)] hover:text-[var(--foreground)] 
                                    transition-all duration-400 ease-in-out cursor-pointer"
                                >
                                  {item}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink className="px-2 py-1 font-medium text-base md:text-xl cursor-pointer">
                        {link.name}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex gap-2 md:gap-4 items-center">
          {/* Search Icon */}
          <div className="relative w-10 h-10 md:w-14 md:h-14 cursor-pointer">
            <Image
              src="/images/circle.svg"
              alt="Circle"
              fill
              className="object-contain z-0"
            />
            <Search className="absolute inset-0 m-auto w-4 h-4 md:w-6 md:h-6 hover:opacity-80 transition text-[var(--background)]" />
          </div>

          {/* Language Selector */}
          <div className="relative w-10 h-10 md:w-14 md:h-14 cursor-pointer">
            <Image
              src="/images/circle.svg"
              alt="Circle"
              fill
              className="object-contain z-0"
            />
            <Select defaultValue="en">
              <SelectTrigger className="absolute inset-0 m-auto text-[var(--background)] border-0 bg-transparent shadow-transparent focus:ring-0 focus:ring-offset-0  md:text-xl text-base">
                <SelectValue placeholder="EN" />
              </SelectTrigger>
              <SelectContent
                className="bg-[var(--foreground)] text-[var(--background)] border-transparent rounded-xl min-w-max"
                style={{ fontFamily: "var(--font-chau-philomene-one)" }}
                sideOffset={8}
              >
                <SelectItem
                  value="en"
                  className="hover:bg-[var(--background)] hover:text-[var(--foreground)] cursor-pointer text-base md:text-xl"
                >
                  EN
                </SelectItem>
                <SelectItem
                  value="ph"
                  className="hover:bg-[var(--background)] hover:text-[var(--foreground)] cursor-pointer text-base md:text-xl"
                >
                  PH
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-start z-50 "
            aria-label="Toggle menu"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
              <Image
                src="/images/circle.svg"
                alt="Menu"
                fill
                className="object-contain"
              />
              {mobileMenuOpen ? (
                <X className="absolute inset-0 m-auto w-5 h-5 sm:w-6 sm:h-6 text-[var(--background)]" />
              ) : (
                <Menu className="absolute inset-0 m-auto w-5 h-5 sm:w-6 sm:h-6 text-[var(--background)]" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-[60px] sm:top-[75px] md:top-[80px] left-0 w-full h-full bg-[var(--background)] transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen
            ? "max-h-[calc(100vh-60px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        style={{ fontFamily: "var(--font-chau-philomene-one)" }}
      >
        <ul className="flex flex-col py-4 px-4 sm:px-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="border-b border-[var(--primary)] last:border-b-0"
            >
              {link.dropdown.length > 0 ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex items-center justify-between py-3 sm:py-4 font-medium text-base md:text-lg hover:opacity-80 transition"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === index ? "max-h-96 mb-2" : "max-h-0"
                    }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="block py-2 pl-4 text-base md:text-lg hover:bg-[var(--primary)] rounded-md transition"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a
                  href="#"
                  className="block py-3 sm:py-4 font-medium text-base sm:text-lg hover:opacity-80 transition"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
