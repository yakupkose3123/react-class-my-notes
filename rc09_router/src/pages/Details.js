import { useState, useEffect } from "react";
import { useNavigate, useNavigationType, useParams } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import CheckoutBag from "../assets/ChackoutBag";
import styles from "./Details.module.css";

const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const navigate= useNavigate();

  useEffect(() => {
     fetch(`https://fakestoreapi.com/products/${params.productId}`)
            .then((res=>res.json()))
            .then(json=>setProduct(json));
            
  }, [])

  const handleBack = ()=>{
    navigate(-1)    // bir önceki sayfaya yönlendirmek için 
  }
  const handleCheckout = () =>{
    navigate("/checkout");
  }


  
  return (
    <div>
      <div className={styles.detailsNav}> 
        <BackArrow onClick={handleBack} className={styles.detailsNavIcon}/>
        <h1>Details Page</h1>
        <CheckoutBag onClick={handleCheckout} className={styles.detailsNavIcon}/>
      </div>
      

    <div className={styles.detailsWrapper}>
      <p>{product?.id}</p>
      <p>{product?.title}</p>
      <p>{product?.description}</p>
      <p>{product?.category}</p>
      <p>{product?.price}</p>
      <p>{product?.reating?.rate}</p>
      <p>{product?.reating?.count}</p>
      <img 
      src={product?.image} 
      alt={product?.title}
      className={styles.detailsImage} 
      />     
      
    </div>
    </div>
  );
};

export default Details;
