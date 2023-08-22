import styles from './CreateCategory.module.css'
const CategoryCard = (props)=>{
    return (
        <div className = {styles.cardContainer}>
        <h5>{props.cate.name}</h5>
        </div>
    )
}

export default CategoryCard