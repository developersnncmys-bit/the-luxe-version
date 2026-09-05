"use client";

import { CartDrawer } from "./cart-drawer";
import { WishlistDrawer } from "./wishlist-drawer";
import { SearchOverlay } from "./search-overlay";
import { AccountDrawer } from "./account-drawer";

// Renders all overlays once, alongside the rest of the app. They read their
// own open/closed state from the store, so this component is prop-less by
// design.
export function StoreMount() {
  return (
    <>
      <SearchOverlay />
      <WishlistDrawer />
      <AccountDrawer />
      <CartDrawer />
    </>
  );
}
