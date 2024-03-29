"use server";

import { Alchemy, Network, TokenBalancesResponseErc20 } from "alchemy-sdk";

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

export const fetchWalletData = async (
  address: string
): Promise<TokenBalancesResponseErc20> => {
  if (!process.env.ALCHEMY_API_KEY) {
    throw new Error("ALCHEMY_API_KEY environment variable is not set.");
  }

  console.log(address, "address here!");

  console.log(alchemy, "alchemy here!!");
  const values = alchemy.core.getBlockNumber();
  console.log(values, "values here");
  try {
    // Fetch all token balances for the address
    const tokenBalances = await alchemy.core.getTokenBalances(address);
    console.log("Token Balances:", tokenBalances);
    return tokenBalances; // Return the fetched data
  } catch (error) {
    console.error("Error fetching token balances:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const fetchWalletDataWithFetch = async (
  address: string
): Promise<
  { name: any; balance: string; symbol: string; logo: string | null }[]
> => {
  if (!process.env.ALCHEMY_API_KEY) {
    throw new Error("ALCHEMY_API_KEY environment variable is not set.");
  }

  // REQUEST OPTIONS
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_getTokenBalances",
      params: [address],
    }),
  };
  // fetching the token balances
  let res = await fetch(alchemyUrl, options);
  let response = await res.json();
  // Getting balances from the response
  const balances = response["result"];

  // Remove tokens with zero balance
  const nonZeroBalances = await balances.tokenBalances.filter(
    (token: { tokenBalance: string }) => {
      return token.tokenBalance !== "0";
    }
  );

  const tokenDetails = [];

  // Counter for SNo of final output
  let i = 1;

  // Loop through all tokens with non-zero balance
  for (let token of nonZeroBalances) {
    // Get balance of token
    let balance = token.tokenBalance;

    // request options for making a request to get tokenMetadata
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "alchemy_getTokenMetadata",
        params: [token.contractAddress],
      }),
    };

    // parsing the response and getting metadata from it
    let res2 = await fetch(alchemyUrl, options);
    let metadata = await res2.json();
    metadata = metadata["result"];

    // Compute token balance in human-readable format
    balance = balance / Math.pow(10, metadata.decimals);
    balance = balance.toFixed(8);
    // Pushing structured token data into tokenDetails array
    if (
      !(metadata.name.includes("#") || metadata.name.includes("$")) &&
      metadata.name !== ""
    ) {
      tokenDetails.push({
        name: metadata.name,
        balance: `${balance}`,
        symbol: metadata.symbol,
        logo: metadata.logo,
      });
    }
  }

  return tokenDetails;
};

export async function getTokenPriceFromCoinGecko(
  // TODO need to change this function to actually work
  tokenName: string[],
  platformId: string = "ethereum"
) {
  try {
    const priceOptions = {
      method: "GET",
      headers: { "x-cg-pro-api-key": `'${process.env.COIN_GECKO_API_KEY}'` },
    };

    const response = await fetch(
      `https://api.coingecko.com/apiv3/simple/token_price/${platformId}?contract_addresses=${contractAddress}&vs_currencies=usd`,
      priceOptions
    );
    if (!response.ok) {
      // If the response is not OK, log the status and return null or throw an error
      const textResponse = await response.text(); // Attempt to read response as text
      console.error(
        `Error fetching token price from CoinGecko: ${response.status} ${response.statusText}`,
        textResponse
      );
      return null;
    }

    const data = await response.json();
    return data[lowerCaseAddress]?.usd;
  } catch (error) {
    console.error("Error fetching token price from CoinGecko:", error);
    return null;
  }
}
