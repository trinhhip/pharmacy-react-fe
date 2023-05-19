import React from 'react';
import { baseUrl } from '~/repositories/Repository';

const StrapiProductImage = ({ url, alt = 'image' }) => {
    return <img src={`${baseUrl}${url}`} alt={alt} />;
};

export default StrapiProductImage;
