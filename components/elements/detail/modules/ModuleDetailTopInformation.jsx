import React from "react";
import Link from "next/link";
import Rating from "~/components/elements/Rating";
import useProduct from "~/hooks/useProduct";

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    const { brand } = useProduct();

    return (
        <header className="ps-product__top-info">
            <h1 className="ps-product__title">{product.name}</h1>
            <p>
                <strong>SKU: </strong>
                <span>{product.sku}</span>
            </p>
        </header>
    );
};

export default ModuleDetailTopInformation;
