import type { Metadata } from "next";
import { AccountClient } from "@/components/account/account-client";

export const metadata: Metadata = {
  title: "My Account — The Luxe Version",
  description: "Orders, addresses and preferences."
};

export default function AccountPage() {
  return <AccountClient />;
}
