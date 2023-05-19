import React from "react";
import Link from "next/link";
import useProduct from "~/hooks/useProduct";
import ModuleProductImage from "~/components/elements/products/modules/ModuleProductImage";

const ProductList = ({ product }) => {
    const { price } = useProduct();
    console.log('product info', product);

    return (
        <div className="ps-product ps-product--horizontal">
            <div className="ps-product__thumbnail">
                <ModuleProductImage product={product} />
            </div>
            <div className="ps-product__wrapper">
                <div className="ps-product__content">
                    <h4 className="ps-product__title">
                        <Link
                            href="/product/[id]"
                            as={`/product/${product.id}`}>
                            <a>{product.name}</a>
                        </Link>
                    </h4>
                </div>
                <div className="ps-product__right">
                    {price(product)}
                    <div className="ps-product__shopping">
                        <div className="form-group--number">
                            <button className="up"></button>
                            <button className="down"></button>
                            <input
                                className="form-control"
                                type="text"
                                defaultValue="1"
                                placeholder="1"
                            />
                        </div>
                        <a className="ps-btn">Add to cart</a>
                        <div className="ps-product__quick-actions">
                            <a href="#">Add to wishlist</a>
                            <a href="#">Add to compare</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
