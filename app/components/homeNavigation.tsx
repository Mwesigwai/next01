"use client";

import { useState, useEffect, useRef } from "react";
import HomeNavigationItems from "./homeNavItems";
import getHomeNavItemNames from "@/lib/getHomeNavItemNames";
import { homeNavItem } from "../types/homeNaveItem";

const HomeNavigation = () => {
  const [visibleItems, setVisibleItems] = useState<homeNavItem[]>([]);
  const [hiddenItems, setHiddenItems] = useState<homeNavItem[]>([]);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMoreMenu = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  useEffect(() => {
    const items: homeNavItem[] = getHomeNavItemNames();

    const handleResize = () => {
      if (!navRef.current) return;

      const navWidth = navRef.current.offsetWidth;
      const itemWidths: number[] = [];
      let totalWidth = 0;

      // Create a temporary container to measure item widths
      const tempContainer = document.createElement("div");
      tempContainer.style.position = "absolute";
      tempContainer.style.visibility = "hidden";
      tempContainer.style.display = "flex";
      tempContainer.style.gap = "1rem";
      tempContainer.style.width = "max-content";

      document.body.appendChild(tempContainer);

      items.forEach((item) => {
        const itemElement = document.createElement("span");
        itemElement.textContent = item.itemName;
        itemElement.style.padding = "10px 20px"; // Match the padding in CSS
        itemElement.style.border = "1px solid transparent"; // Match the border in CSS
        tempContainer.appendChild(itemElement);

        itemWidths.push(itemElement.offsetWidth);
        tempContainer.removeChild(itemElement);
      });

      document.body.removeChild(tempContainer);

      const visible: homeNavItem[] = [];
      const hidden: homeNavItem[] = [];

      // Calculate space for items, reserving space for "More"
      itemWidths.forEach((itemWidth, index) => {
        if (totalWidth + itemWidth < navWidth - 80) {
          visible.push(items[index]);
          totalWidth += itemWidth;
        } else {
          hidden.push(items[index]);
        }
      });

      setVisibleItems(visible);
      setHiddenItems(hidden);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-inherit px-5 xl:px-52 md:px-16 my-9 flex items-center space-x-1"
    >
      {/* Render visible items */}
      <HomeNavigationItems items={visibleItems} />

      {/* Render "More" dropdown if there are hidden items */}
      {hiddenItems.length > 0 && (
        <div className="relative">
          <button
            onClick={toggleMoreMenu}
            className="text-sm border-slate-300 border px-5 py-[.45em] dark:border-slate-400 rounded-3xl text-slate-700 dark:text-slate-300">More</button>
          {isMoreOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded-md z-10">
              {hiddenItems.map((item, index) => (
                <a
                  key={index}
                  href={item.targetRef}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {item.itemName}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default HomeNavigation;
