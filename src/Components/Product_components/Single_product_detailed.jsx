import React from 'react';
import '../../Styles/Component_Styles/Product_style/Single_product_detailed_info.css';

export default function ({ all_elements, el_id, onAdd }) {
    // to find exact element that we opened.
    let element = all_elements.find((i) => i.id === el_id);
    
    // to display detailed info about element.
    function detailed_info(str){
        let splitted = str.split(' / ');
        let output = [];

        for(let i of splitted){
            output.push(i)
        }
        return output;
    }

    let el_info = detailed_info(element.info);

  return (
    <div className='single_product_detailed_info_container'>
        <div className="element_info">
            <div className="element_img_container">
                <h2>{element.brand}{element.name}</h2>
                <img src={element.pic} />
            </div>
            <div className='element_detailed_info'>
                <h1>SPECS</h1>
                {el_info.map((e) => {
                    return(
                        <div className="el_specs" key={e}>
                            <i className="fa-sharp fa-solid fa-check"></i>
                            <p>{e}</p> 
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="element_purchase_info">
            <div className="price">
                <div className="price_details">
                    <h1>${element.price}</h1>
                    <h3>${Math.floor(element.price * 1.1)}</h3>
                </div>
                <div className="is_top_selling">
                    <p>{element.topSelling ? <i className="fa-solid fa-star"></i> : ''}</p>
                </div>
            </div>
            <div className="text">
                <p>Plus $39.80 shipping</p>
                <p className={element.qtn > 0 ? 'in_stock' : 'sold_out'} >
                    {element.qtn > 0 ? 'In Stock' : 'Sold out'}
                </p>
            </div>
            <div className="button">
                <button onClick={() => onAdd(element)}>ADD TO CART</button>
            </div>
            <div className="warranty">
                <p><i className="fa-solid fa-circle-check"></i>30-Day Money-Back Guarantee</p>
                <p><i className="fa-solid fa-circle-check"></i> 3-Year Thomann Warranty</p>
            </div>
        </div>
    </div>
  )
}
