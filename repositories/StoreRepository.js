import Repository, { baseDomain, serializeQuery, customHeaders } from "./Repository";

class StoreRepository {
    async getListStore() {
        var listStore = [];
        try {
            const response = await Repository.get(`${baseDomain}/store/list`);
            if(response.status == 200){
                listStore = response.data
            }
        } catch (e) {
            console.error(e);
        }
        return listStore;
    }
}

export default new StoreRepository();
