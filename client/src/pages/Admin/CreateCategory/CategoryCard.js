import axios from "axios";
import styles from "./CreateCategory.module.css";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-hot-toast";
import Modal from "react-modal";
import { useState } from "react";
const CategoryCard = ({ cate, getAllCategories }) => {
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState(cate.name);

  const onEditCategory = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${cate._id}`,
        { name: newCategoryName }
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);

        setIsEditCategoryModalOpen(false);
        getAllCategories();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Editing category");
    }
  };

  const onDeleteCategory = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${cate._id}`
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);

        getAllCategories();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while deleting category");
    }
  };
  console.log(cate.name);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.icons}>
        <BiEditAlt
          className={styles.icon}
          onClick={() => {
            setIsEditCategoryModalOpen(true);
          }}
        />
        <RiDeleteBinLine className={styles.icon} onClick={onDeleteCategory} />
      </div>
      <h5>{cate.name}</h5>
      <Modal
        isOpen={isEditCategoryModalOpen}
        className={styles.modalContainer}
        onRequestClose={() => {
          setIsEditCategoryModalOpen(false);
        }}
      >
        <div className={styles.createCategoryDataContainer}>
          <h3>Enter the name of the category</h3>
          <input
            placeholder="Enter Category Name"
            className={styles.inputBoxLogin}
            value={newCategoryName}
            onChange={(e) => {
              setNewCategoryName(e.target.value);
            }}
          />
          <div className={styles.buttons}>
            <div
              className={styles.createCategorySubmitButton}
              onClick={onEditCategory}
            >
              Edit Category
            </div>
            <div
              className={styles.cancelButton}
              onClick={() => {
                setIsEditCategoryModalOpen(false);
              }}
            >
              Cancel
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryCard;
