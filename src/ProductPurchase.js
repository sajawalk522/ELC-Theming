import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) =>
  <section className='product-purchase'>
    <div className='inner'>
      <div>
        Quantity <img src={minus} alt="Decrease Quantity" /> 1 <img src={plus} alt="Increase Quantity" />
      </div>
      <div>
        One Time Purchase  <img src={caret} alt="Select Frequency" />
      </div>
    </div>
    <div className='bag'>
      <div className='price'>{price}</div>
      <button name="AddToBag">Add To Bag</button>
    </div>
  </section>