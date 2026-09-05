"use client";

import Link from "next/link";
import { SafeImage } from "@/components/ui/safe-image";
import { productHref } from "@/lib/content";
import { useStore } from "./store-provider";
import { DrawerShell } from "./drawer-shell";

export function CartDrawer() {
  const {
    cart,
    drawer,
    closeDrawer,
    removeFromCart,
    updateCartQty,
    cartSubtotal,
    productByHandle
  } = useStore();

  const open = drawer === "cart";
  const isEmpty = cart.length === 0;

  return (
    <DrawerShell
      open={open}
      onClose={closeDrawer}
      title="Bag"
      footer={
        !isEmpty ? (
          <div className="px-6 py-6 md:px-8">
            <div className="mb-5 flex items-baseline justify-between">
              <p className="text-[11px] uppercase tracking-[0.28em] text-chalk/70">
                Subtotal
              </p>
              <p className="text-[15px] tracking-[0.02em] text-chalk">
                ₹ {cartSubtotal.toLocaleString("en-IN")}
                <span className="text-chalk/50">*</span>
              </p>
            </div>
            <button
              type="button"
              className="w-full bg-chalk py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink transition-opacity hover:opacity-90"
            >
              Proceed to checkout
            </button>
            <button
              type="button"
              onClick={closeDrawer}
              className="mt-4 w-full py-2 text-[11px] uppercase tracking-[0.28em] text-chalk/70 underline underline-offset-[6px] decoration-chalk/30 transition-colors hover:text-chalk"
            >
              Continue shopping
            </button>
            <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-chalk/40">
              *MRP inclusive of all taxes. Shipping and duties calculated at
              checkout.
            </p>
          </div>
        ) : null
      }
    >
      {isEmpty ? (
        <div className="flex h-full flex-col items-center justify-center px-8 py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-chalk/55">
            Your bag is empty
          </p>
          <p className="mt-6 max-w-[24ch] text-[13px] leading-[1.7] text-chalk/70">
            Add a piece from the collection and it will be held here for you.
          </p>
          <Link
            href="/collections/objects"
            onClick={closeDrawer}
            className="mt-10 text-[11px] uppercase tracking-[0.28em] text-chalk underline underline-offset-[6px] decoration-chalk/50 transition-colors hover:decoration-chalk"
          >
            Browse the collection
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-chalk/10">
          {cart.map((item) => {
            const product = productByHandle(item.handle);
            if (!product) return null;
            const lineTotal = product.price.inr * item.qty;
            return (
              <li key={item.handle} className="flex gap-4 px-6 py-6 md:px-8">
                <Link
                  href={productHref(product)}
                  onClick={closeDrawer}
                  className="relative h-24 w-20 shrink-0 overflow-hidden bg-onyx"
                >
                  <SafeImage
                    src={product.image}
                    alt=""
                    fallbackSeed={`${product.handle}-cart`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      href={productHref(product)}
                      onClick={closeDrawer}
                      className="min-w-0 flex-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-chalk transition-colors hover:text-chalk/80"
                    >
                      {product.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.handle)}
                      aria-label={`Remove ${product.name}`}
                      className="shrink-0 text-chalk/50 transition-colors hover:text-chalk"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M1.5 1.5l9 9M10.5 1.5l-9 9"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </button>
                  </div>
                  {product.material && (
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-chalk/50">
                      {product.material}
                    </p>
                  )}

                  <div className="mt-4 flex items-end justify-between">
                    <div className="inline-flex items-center border border-chalk/20">
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQty(item.handle, item.qty - 1)
                        }
                        aria-label="Decrease quantity"
                        className="flex h-7 w-7 items-center justify-center text-chalk/70 transition-colors hover:text-chalk"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-[12px] tracking-[0.08em] text-chalk">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQty(item.handle, item.qty + 1)
                        }
                        aria-label="Increase quantity"
                        className="flex h-7 w-7 items-center justify-center text-chalk/70 transition-colors hover:text-chalk"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-[13px] tracking-[0.02em] text-chalk">
                      ₹ {lineTotal.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </DrawerShell>
  );
}
