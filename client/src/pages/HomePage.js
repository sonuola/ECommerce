import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-products`
      );
      if (data?.success) {
        setProducts(data?.products);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting Products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      {console.log(products)}
      <div className={styles.products}>
        {products?.map((product) => {
          return (
            <div className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img
                  // onClick={() => {
                  //   onOpenProduct();
                  // }}
                  className={styles.image}
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product?._id}`}
                  alt={product?.name}
                ></img>
              </div>
              <div className={styles.nameBox}>
                <h3>{product?.name}</h3>
              </div>
              <div className={styles.priceAndCategory}>
                <h6>Price : {`${product?.price} ₹`}</h6>
                <h6>Category : {product?.category?.name}</h6>
                {/* <h4 className={styles.starData}>
                  {data.rating.rate}
                  <img
                    className={styles.star}
                    src="https://illustoon.com/photo/7414.png"
                    alt="star"
                  />
                </h4> */}
              </div>

              <p className={styles.description}>
                <b>Description: </b>
                {product?.description}
              </p>
            </div>
          );
        })}
      </div>

      <Toaster />
    </Layout>
  );
};

export default HomePage;
