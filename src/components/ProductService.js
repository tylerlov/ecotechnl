import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const ProductService = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="product-service">
      <h2>{blok.title}</h2>
      <p>{blok.description}</p>
      <div className="asset-gallery">
        {blok.assets.map((asset) => (
          <img src={asset.filename} alt="" key={asset.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductService;