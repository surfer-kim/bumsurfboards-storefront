"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState } from "react"

export default function MobileNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev)
    }

    return (
        <div className="flex-1 basis-0 h-full flex items-center relative">
            <div className="hidden small:flex h-full items-center gap-x-6">
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/store">
                    Shop
                </LocalizedClientLink>
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/about">
                    About
                </LocalizedClientLink>
                <LocalizedClientLink className="hover:text-ui-fg-base" href="/contact">
                    Contact
                </LocalizedClientLink>
            </div>

            {/* Mobile menu button */}
            <button
                className="small:hidden flex items-center justify-center w-8 h-8"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <div className="flex flex-col space-y-1">
                    <span
                        className={`block w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                            }`}
                    />
                    <span className={`block w-5 h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                    <span
                        className={`block w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                    />
                </div>
            </button>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="small:hidden fixed inset-0 bg-opacity-25 z-40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu content */}
                    <div className="small:hidden fixed top-24 left-0 right-0 bg-white border-b border-ui-border-base shadow-lg z-50">
                        <div className="content-container py-4">
                            <div className="flex flex-col space-y-4">
                                {["store", "about", "contact", "account"].map((page) => (
                                    <LocalizedClientLink
                                        key={page}
                                        className="hover:text-ui-fg-base py-2"
                                        href={`/${page}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {page.charAt(0).toUpperCase() + page.slice(1)}
                                    </LocalizedClientLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
