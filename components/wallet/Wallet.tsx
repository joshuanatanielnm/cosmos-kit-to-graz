import { getChainLogo } from "@/utils";
import { CHAIN_NAME } from "@/config";
import { User } from "./User";
import { Chain } from "./Chain";
import { Warning } from "./Warning";
import {
  ButtonConnect,
  ButtonConnected,
  ButtonConnecting,
  ButtonDisconnected,
  ButtonError,
  ButtonNotExist,
  ButtonRejected,
} from "./Connect";
import {
  WalletType,
  useAccount,
  useActiveChains,
  useConnect,
  useDisconnect,
} from "graz";

export function Wallet() {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const {
    data: account,
    isConnected,
    isConnecting,
    isDisconnected,
  } = useAccount();
  const activeChains = useActiveChains();
  const chain = activeChains ? activeChains[0] : null;

  const connectButton = () => {
    if (isConnected) return <ButtonConnected onClick={() => disconnect()} />;
    if (isConnecting) return <ButtonConnecting />;
    if (isDisconnected)
      return (
        <ButtonConnect
          onClick={() =>
            connect({
              chainId: "cosmoshub-4",
            })
          }
        />
      );
    else
      return (
        <ButtonConnect
          onClick={() =>
            connect({
              chainId: "cosmoshub-4",
            })
          }
        />
      );
  };

  return (
    <div>
      <div>
        {chain?.chainName && (
          <Chain
            name={chain?.chainName || "Unknown"}
            logo={getChainLogo(chain?.chainName)!}
          />
        )}
      </div>
      <div>
        {account?.name ? <User name={account?.name} /> : null}
        {connectButton()}
      </div>
    </div>
  );
}
