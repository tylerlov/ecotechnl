import React from 'react';
import { storyblokEditable} from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';


const ProductService = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="product-service">
      <h2>{blok.title}</h2>
      <div>
        {render(blok.description)}
      </div>
      <div className="asset-gallery">
        {blok.assets.map((asset) => (
          <img src={asset.filename} alt="" key={asset.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductService;