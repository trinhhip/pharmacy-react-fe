import { useState } from "react";
import ListProductRepository from "~/repositories/ListProduct";


export default function useStore() {
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    return {
        listProduct,
        loading,
        getListProduct: async () => {
            console.log('----- get list -----');
            console.log(listProduct.length)

            if (listProduct.length == 0) {
                const listProduct = await ListProductRepository.getListProduct();

                console.log('----- get list in If -----');
                console.log(listProduct);

                setListProduct(listProduct);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        },
    }

}