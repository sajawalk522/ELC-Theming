import React from 'react';
import { ProductImage } from './ProductImage';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section className='products-container'>
    <h2>{heading}</h2>
    <div className='product-row'>
      <div className='product-card'>
        <div className='image-main'>
          <ProductImage image={p1Img} />
        </div>
        <div className='details'>
          <div>
            <h1>{p1Name}</h1>
            <h4>{p1Price}</h4>
          </div>
          <button>{cta1}</button>
        </div>
      </div>
      <div className='product-card'>
        <div className='image-main'>
          <ProductImage image={p2Img} />
        </div>
        <div className='details'>
          <div>
            <h1>{p2Name}</h1>
            <h4>{p2Price}</h4>
          </div>
          <button>{cta1}</button>
        </div>
      </div>
      <div className='product-card'>
        <div className='image-main'>
          <ProductImage image={p3Img} />
        </div>
        <div className='details'>
          <div>
            <h1>{p3Name}</h1>
            <h4>{p3Price}</h4>
          </div>
          <button>{cta1}</button>
        </div>
      </div>
      <div className='product-card'>
        <div className='image-main'>
          <ProductImage image={p4Img} />
        </div>
        <div className='details'>
          <div>
            <h1>{p4Name}</h1>
            <h4>{p4Price}</h4>
          </div>
          <button>{cta1}</button>
        </div>
      </div>

    </div>
  </section>
