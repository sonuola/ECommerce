import React from "react";
import Layout from "../../components/Layout";
import { useState } from "react";
import CreateCategory from "./CreateCategory/CreateCategory";
import styles from "./Admin.module.css";
import CreateProduct from "./CreateProduct/CreateProduct";
import Products from "./Products/Products";
import UpdateProduct from "./UpdateProduct/UpdateProduct";

const Admin = () => {
  const [selOption, setSelectedOption] = useState(0);
  const [currentProduct, setCurrentProduct] = useState("");
  return (
    <Layout title={"Admin Page"}>
      <>
        <div className={styles.container}>
          <div className={styles.optionsContainer}>
            <h4
              onClick={() => {
                setSelectedOption(0);
              }}
              className={styles.options}
            >
              Create Category
            </h4>
            <h4
              onClick={() => {
                setSelectedOption(1);
              }}
              className={styles.options}
            >
              Create Product
            </h4>
            <h4
              onClick={() => {
                setSelectedOption(2);
              }}
              className={styles.options}
            >
              Products
            </h4>
            <h4
              onClick={() => {
                setSelectedOption(4);
              }}
              className={styles.options}
            >
              Users
            </h4>
          </div>
          <div className={styles.mainData}>
            {selOption === 0 && <CreateCategory />}
            {selOption === 1 && <CreateProduct />}
            {selOption === 2 && (
              <Products
                setSelectedOption={setSelectedOption}
                setCurrentProduct={setCurrentProduct}
                currentProduct={currentProduct}
              />
            )}
            {selOption === 3 && (
              <UpdateProduct
                currentProduct={currentProduct}
                setSelectedOption={setSelectedOption}
                setCurrentProduct={setCurrentProduct}
              />
            )}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Admin;
