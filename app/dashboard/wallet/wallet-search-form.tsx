import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";

export default function WalletSearchForm() {
  const handleWalletSearch = async (formData: FormData) => {
    "use server";
    const address = formData.get("address");
    const blockchain = formData.get("blockchain");
    redirect(`/dashboard/wallet/${address}/${blockchain}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-2">Search for a wallet</h2>
          <Link href="/dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>

        <form className="space-y-4" action={handleWalletSearch}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Wallet Address
            </label>
            <input
              name="address"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="0x..."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Blockchain
            </label>
            <select
              name="blockchain"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option>ERC-20 (Ethereum)</option>
              {/* Add more options if necessary */}
            </select>
          </div>
          <div className="flex justify-between">
            <Link href="/dashboard">
              <Button variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" className="btn btn-primary">
              Add Wallet
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
