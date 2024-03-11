import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import WalletSearchForm from "./wallet/wallet-search-form";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Dashboard({ searchParams }: SearchParamProps) {
  const showWalletSearchForm = searchParams?.show;

  return (
    <>
      <section className=" flex justify-center items-center flex-col bg-ct-blue-600  min-h-screen">
        <div>
          hello from dashboard
          <div>another line</div>
          <Link href="/dashboard?show=true">
            <Button className="flex items-center gap-3 justify-between">
              Search for a wallet <CiSearch size={16} />
            </Button>
          </Link>
        </div>
      </section>
      {showWalletSearchForm && <WalletSearchForm />}
    </>
  );
}
