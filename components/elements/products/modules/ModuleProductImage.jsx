import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazyload";

const ModuleProductImage = ({ product }) => {
    return (
        <div className="ps-product__images">
            <Link href="/product/[id]" as={`/product/${product.id}`}>
                <a className="ps-product__overlay"></a>
            </Link>
            <>
                <LazyLoad>
                    <img src="/static/img/products/medicine1.jpg" alt="" />
                </LazyLoad>
            </>
        </div>
    );
};

export default ModuleProductImage;
