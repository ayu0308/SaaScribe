"use client";
import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface ProviderProps {
    children: React.ReactNode;
}

export default function Providers({children}: ProviderProps){
    const pathname = usePathname();
    const { isLoaded, user } = useUser();
    return (
        <NextUIProvider>
            {
            pathname !== "/dashboard/new-email" && 
            pathname !== "/" && 
            pathname !== "/sign-in" && 
            pathname !== "/sign-up" && 
            pathname !== "/subscribe"  ? (
                <div className="w-full flex">
                    <div className="w-[290px] h-screen overflow-y-scroll"></div>
                </div>
            ) : (
                <>
                {children}
                </>
            )}
        </NextUIProvider>
    )
}