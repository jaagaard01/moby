import AddWalletForm from "../add-wallet/add-wallet-form";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Dashboard({ searchParams }: SearchParamProps) {
  const showAddWalletForm = searchParams?.show;

  return (
    <>
      <Header />
      <section className=" flex justify-center items-center flex-col bg-ct-blue-600  min-h-screen">
        <div>
          hello from dashboard
          <div>another line</div>
          <Link href="/dashboard?show=true">
            <Button>Add a wallet</Button>
          </Link>
        </div>
      </section>
      {showAddWalletForm && <AddWalletForm />}
    </>
  );
}
