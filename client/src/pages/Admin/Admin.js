import React from 'react'
import Layout from '../../components/Layout'
import {useState} from 'react'
import CreateCategory from './CreateCategory/CreateCategory'
import styles from './Admin.module.css'

const Admin = () => {
    const[selOption,setSelectedOption] = useState(0)
  return (
    <Layout title = {'Admin Page'}>
        <>
        <div className = {styles.container}>
            <div className = {styles.optionsContainer}>
              <h4 onClick = {()=>{setSelectedOption(0)}}>Create Category</h4>
              <h4 onClick = {()=>{setSelectedOption(1)}}>Create Product</h4>
              <h4 onClick = {()=>{setSelectedOption(2)}}>Users</h4>
            </div>
            <div className = {styles.mainData}>
                {selOption === 0 && <CreateCategory/>}
                {/* {selOption === 0 && }
                {selOption === 0 && } */}
            </div>
        </div>
        </>
    </Layout>
  )
}

export default Admin