import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from "../Json_File/product.json";
import "./Detail.css"; // Import the CSS file
import { Link } from 'react-router-dom';
function Details() {
  const { id } = useParams();
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const product = [...jsonData.mens, ...jsonData.womens, ...jsonData.childs];
    const ourProduct = product.filter((i) => i.id == id);
    setProd(ourProduct);
  }, [id]);

  return (
    <>
      <div className="details-container">
        <h2>Details Page</h2>
        {prod.map((item) => (
          
            <div  key={item.key}>
            <img className="details-image" src={item.img} alt={item.title} />
            <div className="details-title">{item.title}</div>
            <div className="details-price">{item.price}</div>
            <div className="details-description">{item.description}</div>
            <div><Link to={`/cart/${item.id}`}><button>ADD TO CART</button></Link></div>
          
          </div>
        ))}
      </div>
    </>
  );
}

export default Details;
