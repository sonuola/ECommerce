import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
        <Helmet>
        <meta charset="UTF-8"/>
         <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
        </Helmet>
    <Header/>
    <main style = {{minHeight:"80vh"}}>{children} </main>
    <Footer/>
    </div>
  )
}

Layout.defaultProps = {
    title:'ECOMMERCE APP',
    description:'Buy all the items that you need',
    keywords:'Online,Ecommerce,Buy,Products,Clothing',
    author:'Sonu ola'
}

export default Layout