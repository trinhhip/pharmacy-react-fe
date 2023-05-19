import React from "react";

// Change your description content here
const ModuleDetailDescription = ({product}) => {
    return (
        <div className="ps-product__description ps-document">
           {product.long_description}
        </div>
    );
};

export default ModuleDetailDescription;
