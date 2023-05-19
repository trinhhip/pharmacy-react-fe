import Repository, { baseDomain, serializeQuery, customHeaders } from "./Repository";

class ListProductRepository {
    async getListProduct() {
        var listProduct = [];
        try {
            const response = await Repository.get(`${baseDomain}/item/category/1`);

            console.log ('----- Respone data ------')
            console.log(response)

            if(response.status == 200){
                listProduct = response.data
            }

            console.log ('----- List product repo ------')
            console.log(response)

        } catch (e) {
            console.error(e);
        }
        return listProduct;
    }
}

export default new ListProductRepository();
