import React from "react";
import Theme from "./Theme";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-2 border-red-500 bg-red-700 w-full p-2 px-4 h-[70px] flex flex-row items-center justify-between">
            <h1 className="h1-bold text-white">RAVEN MAP</h1>
            <div className="flex flex-row items-center justify-center gap-2">
                <Theme />
                <SignedOut>
                    <Link href="/sign-in" className="flex flex-row gap-3 bg-red-700 text-white">
                        <span className="text-xl font-semibold">Log In /</span>
                    </Link>
                    <Link href="/sign-up" className="flex flex-row bg-red-700 text-white">
                        <span className="text-xl font-semibold">Sign up</span>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;
