import Repository, { baseDomain, serializeQuery, customHeaders } from "./Repository";

class OrderRepository {
    async placeOrder(params) {
        try {
            const response = await Repository.post(`${baseDomain}/order/place-order`,{
                store_id: params.store_id,
                customer_id: params.customer_id,
                status: params.status,
                take_time_from: params.take_time_from,
                take_time_to: params.take_time_to,
                items: params.items
            });
            if (response.data.code == 200) {
                return true;
            }
        } catch (e) {
            console.error(e);
            return false;
        }
        return false;
    }
}

export default new OrderRepository();
