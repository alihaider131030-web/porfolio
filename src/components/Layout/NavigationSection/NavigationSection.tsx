import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  const location = useLocation();

  const navigationItems = [
    { label: "HOME", href: "/", path: "/" },
    { label: "ABOUT", href: "/about", path: "/about" },
    { label: "LAWYER", href: "/lawyer", path: "/lawyer" },
    { label: "ENTREPRENEUR", href: "/entrepreneur", path: "/entrepreneur" },
    { label: "BUSINESS ADVISOR", href: "/business-advisor", path: "/business-advisor" },
    { label: "ARTICLES", href: "/articles", path: "/articles" },
    { label: "CONTACT", href: "/contact", path: "/contact" },
  ];

  return (
    <header className="w-full h-[78px] bg-[#302f38]">
      <div className="relative w-full max-w-[1161px] h-[90px] -mt-1.5 mx-auto px-[62px]">
        <Link to="/" className="absolute w-[145px] h-[90px] top-0 left-[74px] flex items-center">
          <div className="flex items-center">
            <div className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#c99e67] text-[20px] tracking-[8px] leading-[24px]">
              PETER
            </div>
            <div className="[font-family:'Great_Vibes',Helvetica] font-normal text-[#f7f6f5] text-[20px] tracking-[8px] leading-[24px] ml-1">
              J
            </div>
            <div className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#c99e67] text-[20px] tracking-[8px] leading-[24px] ml-1">
              WEBB
            </div>
          </div>
        </Link>

        <NavigationMenu className="absolute top-[33px] left-[326px]">
          <NavigationMenuList className="flex gap-8">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.href}
                    className={`relative px-3 py-1 text-base tracking-[0] leading-6 whitespace-nowrap transition-colors hover:text-white ${
                      location.pathname === item.path
                        ? "text-white [font-family:'Segoe_UI-Bold',Helvetica] font-bold border-l-[2.67px] border-l-[#c99e67] pl-[11px]"
                        : "text-[#b9b9c6] [font-family:'Segoe_UI-Regular',Helvetica] font-normal hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};