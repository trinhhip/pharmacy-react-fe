import React from "react";
import LazyLoad from "react-lazyload";
import { formatCurrency } from "~/utilities/product-helper";
import Link from "next/link";
export const baseImageUrl = process.env.NEXT_PUBLIC_FE_URL;

function getImageURL(source, size) {
    let image, imageURL;

    if (source) {
        if (size && size === "large") {
            if (source.formats.large) {
                image = source.formats.large.url;
            } else {
                image = source.url;
            }
        } else if (size && size === "medium") {
            if (source.formats.medium) {
                image = source.formats.medium.url;
            } else {
                image = source.url;
            }
        } else if (size && size === "thumbnail") {
            if (source.formats.thumbnail) {
                image = source.formats.source.url;
            } else {
                image = source.url;
            }
        } else if (size && size === "small") {
            if (source.formats.small !== undefined) {
                image = source.formats.small.url;
            } else {
                image = source.url;
            }
        } else {
            image = source.url;
        }
        imageURL = `${baseImageUrl}${image}`;
    } else {
        imageURL = `/static/img/undefined-product-thumbnail.jpg`;
    }
    return imageURL;
}

export default function useProduct() {
    return {
        thumbnailImages: (payload) => {
            const imageURL = '/static/img/products/' + payload.image;
            return (
                <>
                    <LazyLoad>
                        <img
                            src={imageURL}
                            // src="/static/img/products/medicine1.jpg"
                            alt=""
                        />
                    </LazyLoad>
                </>
            );
        },
        price: (payload) => {
            let view;
            if (payload.sale_price) {
                view = (
                    <p className="ps-product__price sale">
                        <span>$</span>
                        {formatCurrency(payload.sale_price)}
                        <del className="ml-2">
                            <span>$</span>
                            {formatCurrency(payload.price)}
                        </del>
                    </p>
                );
            } else {
                view = (
                    <p className="ps-product__price">
                        {formatCurrency(payload.price)}
                        <span> {payload.currency_code}</span>
                    </p>
                );
            }
            return view;
        },
        badges: (payload) => {
            let view = null;
            if (payload.badges && payload.badges.length > 0) {
                const items = payload.badges.map((item) => {
                    if (item.value === "hot") {
                        return (
                            <span
                                className="ps-product__badge hot"
                                key={item.id}>
                                Hot
                            </span>
                        );
                    }
                    if (item.value === "new") {
                        return (
                            <span
                                className="ps-product__badge new"
                                key={item.id}>
                                New
                            </span>
                        );
                    }
                    if (item.value === "sale") {
                        return (
                            <span
                                className="ps-product__badge sale"
                                key={item.id}>
                                Sale
                            </span>
                        );
                    }
                });
                view = <div className="ps-product__badges">{items}</div>;
            }
            return view;
        },
        onSale: (payload) => {
            let view = null;
            if (payload.sale_price && payload.on_sale) {
                const discountPercent = (
                    ((payload.sale_price - payload.price) / payload.price) *
                    100
                ).toFixed(0);
                view = (
                    <span className="ps-product__on-sale">
                        -{discountPercent}%
                    </span>
                );
            }
            return view;
        },
        brand: (payload) => {
            let view;
            if (payload.product_brands && payload.product_brands.length > 0) {
                view = (
                    <Link href="/shop">
                        <a className="text-capitalize">
                            {payload.product_brands[0].name}
                        </a>
                    </Link>
                );
            } else {
                view = (
                    <Link href="/shop">
                        <a className="text-capitalize">No Brand</a>
                    </Link>
                );
            }
            return view;
        },
    };
}
