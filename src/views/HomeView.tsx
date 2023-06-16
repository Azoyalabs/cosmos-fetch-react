import { ExplainContainer } from "@/components";
import { IconDocumentation } from "@/components/icons/IconDocumentation";
import { FNS_NFT_TOKEN_ID, FNS_NFT_ADDRESS } from "@/constants";
import { useSignerStore } from "@/stores/wallet";
import React from "react";

const HomeView: React.FC = (): React.ReactElement => {
  const { signer, connectToWallet, isConnected, account } = useSignerStore();

  return (
    <>
      <main>
        <ExplainContainer.Container
          heading={<>Wallet Connection</>}
          icon={
            <ExplainContainer.Icon>
              <IconDocumentation></IconDocumentation>
            </ExplainContainer.Icon>
          }
        >
          <>
            <div v-if="signerStore.isConnected">
              <div>Your connected wallet address is:</div>
              <div v-if="accountDatas">
                {account ? (
                  <div className="address">{account.address}</div>
                ) : (
                  <button onClick={connectToWallet}>
                    Connect to your fetch wallet
                  </button>
                )}
              </div>
            </div>

            <div className="mt-2">
              Your crypto address is a unique identifier, it is used to receive
              and send messages, interact with the network and handle funds.
            </div>
          </>
        </ExplainContainer.Container>

        <ExplainContainer.Container
          heading={<>Bank Balances</>}
          icon={
            <ExplainContainer.Icon>
              <IconDocumentation></IconDocumentation>
            </ExplainContainer.Icon>
          }
        >
          <>
            An address' balances can be queried using the Stargate or CosmWasm
            client. These balances are raw and you'll need to take into account
            both the decimals and the actual token denomination to display
            something comprehensible to the users. Your own balances will be
            shown after connecting your wallet.
            {/* TODO: implement balance list here */}
            These balances will also include Interchain tokens, most commonly
            known as IBC tokens. You'll be able to spot them thanks to their
            special denomination as it starts with <code>ibc</code>.
            <br />
            {/* TODO: implement ibc denom list here */}
            <br />
            Any time you find yourself dealing with such a denomination, you can
            use the
            <code>
              ibc extension for the tendermint client and its
              ibc.transfer.denomTrace
            </code>{" "}
            to translate it into one of the human readable symbol, we've just
            shown. Token informations can usually be found in the{" "}
            <a href="https://github.com/cosmos/chain-registry">
              chain registry repository
            </a>
            .
          </>
        </ExplainContainer.Container>

        <ExplainContainer.Container
          heading={<>Smart contract - Token (CW20)</>}
          icon={
            <ExplainContainer.Icon>
              <IconDocumentation></IconDocumentation>
            </ExplainContainer.Icon>
          }
        >
          <>
            The Cosmos ecosystem has its own version of the ERC20 token standard
            from EVM chains. These are treated differently from native
            denominations and require CosmWasm and a CosmWasm client to be
            interacted with.
            <br />
            Contrary to Native denominations, CW20 includes optional marketing
            info fields.
          </>
        </ExplainContainer.Container>

        <ExplainContainer.Container
          heading={<>Smart contract - NFTs (CW20)</>}
          icon={
            <ExplainContainer.Icon>
              <IconDocumentation></IconDocumentation>
            </ExplainContainer.Icon>
          }
        >
          <>
            <div>
              Just like the CW20 standard, the CW721 standard is inspired by the
              EVM one. You can query any NFT collection, its information and all
              of its individual tokens using a CosmWasm compatible client.
              <div className="mt-2">
                NFT Info for <span className="symbol">{FNS_NFT_TOKEN_ID}</span>{" "}
                from the <span className="address">{FNS_NFT_ADDRESS}</span>{" "}
                collection.
              </div>
            </div>
          </>
        </ExplainContainer.Container>

        <ExplainContainer.Container
          heading={<>Ecosystem</>}
          icon={
            <ExplainContainer.Icon>
              <IconDocumentation></IconDocumentation>
            </ExplainContainer.Icon>
          }
        >
          <>
            If you need more resources on developing for Cosmos chains, we
            suggest paying
            {" "}
            <a
              href="https://github.com/cosmos/awesome-cosmos"
              target="_blank"
              rel="noopener"
            >
              Awesome Cosmos
            </a>
            {" "}
            a visit.
            <br />
            You can also discover innovative projects on the Fetch.ai blockchain
            on their{" "}
            <a
              href="https://fetch.ai/ecosystem/"
              target="_blank"
              rel="noopener"
            >
              ecosystem page
            </a>
            .
          </>
        </ExplainContainer.Container>
      </main>
    </>
  );
};

export default HomeView;
