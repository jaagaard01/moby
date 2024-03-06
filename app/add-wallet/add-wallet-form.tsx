import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddWalletForm() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">Add New Wallet</h2>
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
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Wallet Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="My Wallet"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Wallet Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              placeholder="0x..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Blockchain
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
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
