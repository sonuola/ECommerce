import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./CreateProduct.module.css";
import { Toaster, toast } from "react-hot-toast";
import { Select } from "antd";
import classNames from "classnames";
const { Option } = Select;

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [photo, setphoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/create-product`,
        productData
      );
      if (data?.success) {
        toast.success("Product Created Successfully");
        console.log(data);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Creating Product");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className={styles.createProductContainer}>
      <h3> Create Product</h3>
      <div className={styles.productData}>
        <label className={styles.label}>
          Product Name
          <input
            type="text"
            placeholder="Product Name"
            className={styles.inputBox}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <div className={styles.cateAndPrice}>
          <label>
            {" "}
            Select a Category
            <Select
              placeholder="Select a category"
              showSearch
              value={category}
              onChange={(value) => {
                setCategory(value);
              }}
              className={styles.selectBox}
            >
              {categories.map((c) => {
                return (
                  <Option key={c._id} value={c.id}>
                    {c.name}
                  </Option>
                );
              })}
            </Select>
          </label>
          <label>
            Price
            <input
              type="number"
              placeholder="Price"
              className={styles.inputBox}
              value={price}
              onChange={(e) => {
                // console.log(value);
                setPrice(e.target.value);
              }}
            />
          </label>

          <label>
            Quantity
            <input
              type="number"
              value={quantity}
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.inputBox}
            />
          </label>
          <label>
            Shipping
            <Select
              placeholder="Shipping"
              value={shipping}
              onChange={(value) => {
                setShipping(value);
              }}
              className={styles.selectBox}
            >
              <Option value={1}>Yes</Option>
              <Option value={0}>No</Option>
            </Select>
          </label>
        </div>

        <label className={styles.label}>
          Description
          <textarea
            type="text"
            placeholder="Description"
            className={styles.descriptionBox}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>

        <label
          className={classNames(styles.label, "btn btn-outline-secondary")}
        >
          {photo ? photo.name : "Upload Photo"}
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => {
              setphoto(e.target.files[0]);
            }}
            hidden
          ></input>
        </label>
        {photo && (
          <div>
            <img
              src={URL.createObjectURL(photo)}
              alt="Product_photo"
              height={"200px"}
              className="img img-responsive"
            />
          </div>
        )}
      </div>
      <button className="btn btn-primary mt-2 w-60" onClick={handleCreate}>
        Create
      </button>
      <Toaster />
    </div>
  );
};

export default CreateProduct;
