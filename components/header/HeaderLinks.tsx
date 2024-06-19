import {siteConfig} from "@/config/site";
import Link from "next/link";
import React from "react";

const HeaderLinks = () => {
    const links = siteConfig.headerLinks;

    return (
        <div className="flex flex-row items-center">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener norefferer"
                    className="mx-3 flex flex-col items-center justify-center text-[#111111] hover: text-[#3f94fd] text-[18px] font-[500]"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};
export default HeaderLinks;
