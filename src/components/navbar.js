// "use client";
// import { Search } from "lucide-react";

// export default function Navbar() {
//   const navLinks = [
//     {
//       name: "WHOLE FOODS",
//       dropdown: [
//         "WHAT ARE WHOLE FOODS?",
//         "WHAT WHOLE FOODS DO FOR YOU",
//         "THE FUTURE IS WHOLE FOODS",
//       ],
//     },
//     {
//       name: "ABOUT US",
//       dropdown: ["ABOUT US", "OUR STORY", "THE TEAM", "FAQ"],
//     },
//     {
//       name: "PRODUCTS",
//       dropdown: ["BREAD", "CRACKERS", "GRANOLA", "CRUNCHY MUESLI BAR"],
//     },
//     { name: "RECIPES", dropdown: [] },
//     { name: "BLOG", dropdown: [] },
//     { name: "CONTACT", dropdown: [] },
//   ];

//   return (
//     <nav
//       className="flex items-center justify-between py-4 px-8 bg-[var(--background)] text-[var(--foreground)] relative"
//       style={{ fontFamily: "var(--font-chau-philomene-one)" }}
//     >
//       {/* Logo */}
//       <div className="font-bold text-2xl tracking-wide cursor-pointer">
//         gr8nola
//       </div>

//       {/* Center Links */}
//       <ul className="flex gap-10">
//         {navLinks.map((link, index) => (
//           <li key={index} className="relative group">
//             <button className="font-medium hover:opacity-80 transition cursor-pointer">
//               {link.name}
//             </button>

//             {/* Dropdown (only show if not empty) */}
//             {link.dropdown.length > 0 && (
//               <div
//                 className="absolute left-1/2 -translate-x-1/2 mt-3
//           hidden group-hover:flex flex-col
//           bg-[var(--foreground)] text-[var(--background)]
//           rounded-lg shadow-lg py-2 px-3 w-48 text-sm text-left z-10
//           before:content-[''] before:absolute before:top-[-8px] before:left-1/2 before:-translate-x-1/2
//           before:w-0 before:h-0 before:border-l-[8px] before:border-r-[8px]
//           before:border-b-[8px] before:border-l-transparent before:border-r-transparent
//           before:border-b-[var(--foreground)]"
//               >
//                 {link.dropdown.map((item, i) => (
//                   <div
//                     key={i}
//                     className="py-2 px-2 rounded hover:bg-[var(--background)] hover:text-[var(--foreground)] cursor-pointer transition"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         <Search className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
//         <select className="bg-transparent text-[var(--foreground)] border border-[var(--foreground)] text-sm rounded px-2 py-1 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition cursor-pointer">
//           <option value="en" className="text-black">
//             EN
//           </option>
//           <option value="ph" className="text-black">
//             PH
//           </option>
//         </select>
//       </div>
//     </nav>
//   );
// }

"use client";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "next/link";

const Navbar = () => {
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

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-8 bg-[var(--background)] text-[var(--foreground)] "
      style={{ fontFamily: "var(--font-chau-philomene-one)" }}
    >
      {/* Logo */}
      <div className="flex font-bold text-[40px] tracking-wide cursor-pointer">
        gr<span className="text-[45px] font-normal">8</span>nola
      </div>

      <ul className="hidden md:flex gap-6">
        {navLinks.map((link, index) => (
          <li key={index} className="relative group">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {/* If dropdown exists, show trigger; otherwise, show a simple link */}
                  {link.dropdown.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="font-medium  hover:opacity-80 transition cursor-pointer">
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
                            before:border-b-[var(--foreground)] "
                      >
                        <ul className="grid gap-2 px-2 py-4 min-w-max">
                          {link.dropdown.map((item, i) => (
                            <li key={i}>
                              <NavigationMenuLink
                                // href={`/${item
                                //   .toLowerCase()
                                //   .replace(/\s+/g, "-")}`}
                                className="block px-2 py-1 rounded-md 
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
                    <NavigationMenuLink className="px-2 py-1 font-medium cursor-pointer">
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
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center w-14 h-14 bg-[var(--foreground)] text-[var(--background)] border-none text-lg rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition cursor-pointer">
          <Search className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
        </div>
        <div className="flex justify-center items-center w-14 h-14 bg-[var(--foreground)] text-[var(--background)] border-none text-lg rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition cursor-pointer">
          <Select defaultValue="en">
            <SelectTrigger>
              <SelectValue placeholder="EN" />
            </SelectTrigger>

            <SelectContent
              className="bg-[var(--foreground)] text-[var(--background)] rounded-xl border-none min-w-max mt-5"
              style={{ fontFamily: "var(--font-chau-philomene-one)" }}
            >
              <SelectItem
                value="en"
                className="hover:bg-[var(--background)] hover:text-[var(--foreground)] cursor-pointer text-lg"
              >
                EN
              </SelectItem>
              <SelectItem
                value="ph"
                className="hover:bg-[var(--background)] hover:text-[var(--foreground)] cursor-pointer text-lg"
              >
                PH
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
