import { CHAIN_ID } from "@/constants";
import { AccountData, OfflineAminoSigner } from "@keplr-wallet/types";
import { StoreApi, create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface SignerStore {
  signer: OfflineAminoSigner | null;
  account: AccountData | null;
  connectToWallet: () => Promise<void>;
  isConnected: () => boolean;
  addresses: () => Promise<readonly AccountData[]> | null;
}

export const useSignerStore = create<SignerStore>((set, get, subscribe) => {
  return {
    signer: null,
    account: null,
    connectToWallet: async () => {
      if (window.keplr) {
        const keplr = window.keplr;
        await keplr.enable([CHAIN_ID]);
        const signer = keplr.getOfflineSigner(CHAIN_ID);
        set((state) => ({ signer }));

        const accounts = await signer.getAccounts();
        set((state) => ({
          account: accounts[0],
        }));
      }
    },
    isConnected: () => get().account !== null,
    addresses: () => get().signer?.getAccounts() ?? null,
    subscribe,
    /*
    computed: {
      accountDatas: () => get().signer?.getAccounts(),
    },*/
    //set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
  };
});

subscribeWithSelector(useSignerStore);
