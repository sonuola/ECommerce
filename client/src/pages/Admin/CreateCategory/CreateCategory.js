import react, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "./CreateCategory.module.css";
import CategoryCard from "./CategoryCard";
import Modal from "react-modal";
// import { Modal, ModalHeader } from "reactstrap";

Modal.setAppElement("#root");
const CreateCategory = () => {
  const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] =
    useState(false);

  const [categories, setcategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data.success) {
        setcategories(data.category);
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
        Header Body
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
            return <CategoryCard cate={cate} />;
          })}
          {/* <div className={styles.modalContainer}>
            <Modal
              size="s"
              isOpen={isCreateCategoryModalOpen}
              toggle={() => {
                setIsCreateCategoryModalOpen(!isCreateCategoryModalOpen);
              }}
            >
              <ModalHeader
                isOpen={isCreateCategoryModalOpen}
                toggle={() => {
                  setIsCreateCategoryModalOpen(!isCreateCategoryModalOpen);
                }}
              >
                Popup
              </ModalHeader>
            </Modal>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
