import { GiSpermWhale } from "react-icons/gi";
import Image from "next/image";
import { Suspense } from "react";
import { fetchWalletDataWithFetch } from "@/app/lib/actions";

export default async function FoundWalletPage({
  params,
}: {
  params: { address: string; blockchain: string };
}) {
  const tokens = await fetchWalletDataWithFetch(params.address);
  console.log(tokens, "tokens here");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Wallet: {params.address}
        </h1>
        <h2 className="text-xl mb-2">Blockchain: {params.blockchain}</h2>
        <div className="mt-6">
          {tokens.map((token, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center">
                {!token.logo ||
                typeof token.logo !== "string" ||
                token.logo === "" ? (
                  <GiSpermWhale size={24} />
                ) : (
                  <Image
                    src={token.logo}
                    alt={token.name}
                    width={24}
                    height={24}
                  />
                )}
                <span className="ml-2">{token.name}</span>
              </div>
              <div>
                <span>{token.balance}</span> <span>{token.symbol}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
