import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MobileNav from "@modules/common/components/nav"
import CartButton from "@modules/layout/components/cart-button"
import { Suspense } from "react"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-24 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          {/* Left - Shop, About, and Contact */}
          <MobileNav />

          {/* Center - Store logo/name */}
          <div className="flex items-center h-full">
            <LocalizedClientLink href="/" className="hover:opacity-80 transition-opacity" data-testid="nav-store-link">
              <img src="/favicon.svg" alt="Logo" className="h-20 w-auto" />
            </LocalizedClientLink>
          </div>

          {/* Right side - Account and Cart */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink className="hover:text-ui-fg-base" href="/account" data-testid="nav-account-link">
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
