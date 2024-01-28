import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LogoHeader = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/images/sb_logo.png"
        alt="Softbase logo"
        width={200}
        height={200}
      />
    </Link>
  );
};

export const LogoHomePage = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/images/sb_logo.png"
        alt="Softbase logo"
        fill
        className="object-contain"
      />
    </div>
  );
};
