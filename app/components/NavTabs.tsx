"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavTabs = () => {
  const pathname = usePathname();
  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const getTabClassName = (path: string) => {
    return `tab-btn py-3 px-10 text-center w-[140px] md:w-[150px] rounded-[30px] text-base font-medium border-2 ${
      pathname === path
        ? "border-[#3D2278] text-[#3D2278]"
        : "border-transparent"
    }`;
  };

  useEffect(() => {
    if (pathname && tabRefs.current[pathname]) {
      tabRefs.current[pathname]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [pathname]);

  return (
    <section className="max-w-[1180px] w-full pb-10 md:pb-20 mx-auto flex gap-5 pt-[30px] md:pt-[50px] overflow-x-scroll lg:overflow-x-visible tabs-scrollbar relative">
      <Link
        href="/"
        ref={(el) => {
          tabRefs.current["/"] = el;
        }}
        className={`ml-5 lg:ml-0 ${getTabClassName("/")}`}
      >
        Body
      </Link>

      <Link
        href="/plan"
        ref={(el) => {
          tabRefs.current["/plan"] = el;
        }}
        className={getTabClassName("/plan")}
      >
        Sports
      </Link>

      <Link
        href="/nutrition"
        ref={(el) => {
          tabRefs.current["/nutrition"] = el;
        }}
        className={getTabClassName("/nutrition")}
      >
        Nutrition
      </Link>

      <Link
        href="/podcasts"
        ref={(el) => {
          tabRefs.current["/podcasts"] = el;
        }}
        className={getTabClassName("/podcasts")}
      >
        Podcasts
      </Link>

      <Link
        href="/store"
        ref={(el) => {
          tabRefs.current["/store"] = el;
        }}
        className={`mr-5 lg:mr-0 ${getTabClassName("/store")}`}
      >
        Store
      </Link>
    </section>
  );
};

export default NavTabs;
