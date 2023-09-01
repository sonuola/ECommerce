import react, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import styles from "./CreateCategory.module.css";
import CategoryCard from "./CategoryCard";
import Modal from "react-modal";
// import { Modal, ModalHeader } from "reactstrap";

Modal.setAppElement("#root");
const CreateCategory = () => {
  const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] =
    useState(false);

  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }

    // axios
    // .get(`${process.env.REACT_APP_API}/api/v1/category/get-category`)
    // .then((response) => {
    // //   setProducts(response.data);
    //   console.log(response)
    // })
    // .catch((error) => {

    // });
  };

  const onCreateCategory = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/create-category`,
        { name: newCategoryName }
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          setIsCreateCategoryModalOpen(false);
          getAllCategories();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in creating category");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div>
      <Modal
        isOpen={isCreateCategoryModalOpen}
        className={styles.modalContainer}
        onRequestClose={() => {
          setIsCreateCategoryModalOpen(false);
        }}
      >
        <div className={styles.createCategoryDataContainer}>
          <h3>Enter the name of the category</h3>
          <input
            placeholder="Enter Category Name"
            className={styles.inputBoxLogin}
            onChange={(e) => {
              setNewCategoryName(e.target.value);
            }}
          />
          <div className={styles.buttons}>
            <div
              className={styles.createCategorySubmitButton}
              onClick={onCreateCategory}
            >
              Create Category
            </div>
            <div
              className={styles.cancelButton}
              onClick={() => {
                setIsCreateCategoryModalOpen(false);
              }}
            >
              Cancel
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.container}>
        <div
          className={styles.buttonContainer}
          onClick={() => {
            setIsCreateCategoryModalOpen(true);
          }}
        >
          <p className={styles.createCategoryButton}>Create Category</p>
        </div>
        <div className={styles.cardsContainer}>
          {console.log(categories.length)}
          {categories.map((cate) => {
            return (
              <CategoryCard cate={cate} getAllCategories={getAllCategories} />
            );
          })}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateCategory;
