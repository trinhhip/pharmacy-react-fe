import React from "react";
import Link from "next/link";

const ModuleProductDetailDescription = ({product}) => (
    <ul className="ps-product__short-desc">
        {product.sort_description}
    </ul>
);

export default ModuleProductDetailDescription;
