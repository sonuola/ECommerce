import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./Products.module.css";

const Products = ({
  setSelectedOption = () => {},
  setCurrentProduct = () => {},
  currentProduct = {},
}) => {
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
  }, [currentProduct]);

  const onDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/product/product-delete/${id}`
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);

        getAllProducts();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while deleting Product");
    }
  };

  return (
    <div className="d-flex">
      {products?.map((p) => {
        return (
          <div>
            <div className="card m-2" style={{ width: "18rem" }}>
              <div className={styles.icons}>
                <BiEditAlt
                  className={styles.icon}
                  onClick={() => {
                    setCurrentProduct(p);
                    setSelectedOption(3);
                  }}
                />
                <RiDeleteBinLine
                  className={styles.icon}
                  onClick={() => {
                    onDeleteProduct(p._id);
                  }}
                />
              </div>
              <img
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
              </div>
            </div>
          </div>
        );
      })}
      <Toaster />
    </div>
  );
};

export default Products;
