import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from './NavItems';

const Header = () => {
  return (
    <header className="w-full border-b p-4 flex items-center justify-between">
      <div>
        <Link href="/" className="text-lg font-bold w-36">
          ezEVENTS
        </Link>
      </div>
      <SignedIn>
        <nav className="md:flex-between w-full max-w-xs">
          <NavItems ></NavItems>
        </nav>
      </SignedIn>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
