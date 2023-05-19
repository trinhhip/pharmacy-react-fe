import axios from "axios";
import React from 'react';
export const baseDomain = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const baseUrlProduct = "https://mymedi.noudeveloper.com";


export const customHeaders = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": baseDomain,
    "Access-Control-Allow-Origin": "*"
    // authorization: ReactSession.get("token")
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join("&");
};
