import { useState } from "react";
import StoreRepository from "~/repositories/StoreRepository";


export default function useStore() {
    const [listStore, setListStore] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    return {
        listStore,
        isLoading,
        getListStore: async () => {
            if (listStore.length == 0) {
                const stores = await StoreRepository.getListStore();
                setListStore(stores);
            }
        },
        getStore: async (storeId) => {
            
        },

        selectedStore : async(storeId) => {
            console.log(storeId)
        }

    }

}