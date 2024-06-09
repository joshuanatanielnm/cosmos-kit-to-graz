import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ConfigureGrazArgs, GrazProvider } from "graz";
import { cosmoshub } from "graz/chains";

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const chains = [
    {
      ...cosmoshub,
      rpc: "https://rpc.cosmos.directory/cosmoshub",
      rest: "https://rest.cosmos.directory/cosmoshub",
    },
  ];

  const grazOptions: ConfigureGrazArgs = {
    chains,
    onReconnectFailed: () => {
      console.log("reconnect failed");
    },
    walletConnect: {
      options: {
        projectId: "a8510432ebb71e6948cfd6cde54b70f7",
        relayUrl: "wss://relay.walletconnect.org",
        metadata: {
          name: "CosmosKit to Graz Template",
          description: "CosmosKit to Graz dapp template",
          url: "https://docs.cosmology.zone/cosmos-kit/",
          icons: [],
        },
      },
    },
  };

  return (
    <GrazProvider grazOptions={grazOptions}>
      <Component {...pageProps} />
    </GrazProvider>
  );
}

export default CreateCosmosApp;
