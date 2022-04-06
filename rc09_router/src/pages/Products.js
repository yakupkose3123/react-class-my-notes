import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <h2>Product Page</h2>
      <div className={styles.products}>
        {products.map((each) => (
          //Bu link in to sunu böyle yazarsak products/details yapıyor . yoksa ana adresin sonuna /details yapıyor
          <Link
            to={`details/${each.id}`}
            key={each.id}
            className={styles.product}
          >
            <h6>{each.category}</h6>
            <p>{each.title}</p>
            <img src={each.image} style={{ width: "100px" }} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
