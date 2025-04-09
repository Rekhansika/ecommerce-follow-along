import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from "./products.module.css";
import CartCard from './CartCard';
import MyProductCard from './MyProductCard';
const Cart = () => {
    const [products,setProducts] = useState([]);
    function getData(){
        axios.get("http://localhost:8080/allproducts")
        .then((data)=>{
            console.log(data);

            const userData = JSON.parse(localStorage.getItem("follow-along-auth-token-user-name-id"))
            const newData = data.data.products.filter((ele)=>{
                return ele.userId == userData.id; 
            })
            setProducts(newData);
        }).catch((err)=>{
            console.log(console.error(err));
        })
    }


    useEffect(()=>{
        getData();
    },[])

  return (
    <>
        <h1>Products</h1>
        <div className={styles.products}>
        {
            products.map((ele)=>{
                return <MyProductCard key={ele.id} product={ele}/>
            })
        }
    </div>
    </>
  )
}

export default Cart;