import React, { useEffect } from "react";
import useGetListproduct from "~/hooks/product/useGetListproduct";
import useProductGroup from "~/hooks/useProductGroup";
import Link from "next/link";
const HomeOneProductList = ({
    title = "List Products"
}) => { 
    const { loading, listProduct, getListProduct } = useGetListproduct();
    const { withGrid } = useProductGroup();

    console.log('----- before get list -----1');
    console.log(listProduct);

    useEffect(() => {
        getListProduct();
    }, []);

    console.log('----- after get list -----')
    console.log(listProduct);

    const products = withGrid(listProduct.data, loading);

    console.log('----- with Grid -----')
    console.log(products);

    return (
        <section className="ps-section--standard ps-featured-products">
            <div className="container">
                <div className="ps-section__header">
                    <h3>{title}</h3>
                </div>
                <div className="ps-section__content">{products}</div>
            </div>
        </section>
    );
};

export default HomeOneProductList;
