import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from "react-bootstrap"; 
//import products from "../products";
import { useDispatch, useSelector } from 'react-redux';
import {listProduct} from "../actions/productActions.js"; 
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message"; 
import axios from "axios";

const HomeScreen = () => {
   // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading, error, products} = productList
    useEffect(() => {
        // const fetchProducts = async () => {
        //     const { data } = await axios.get('/api/products');
        //     setProducts(data); 
        // }
        // fetchProducts(); 
        dispatch(listProduct()); 
    }, [dispatch])
    return (
        <div>
            <h1>Latest Products</h1>
            { loading ? <Loader/>  : error ? <Message variant="danger">{error}</Message> : (
                
            <Row>
                {products.map(product => {
                    return (
                        <Col key={product._id} sm={12} md={6} lg={4}  xl={3}>
                            
                            <Product product={product}/> 
                        </Col>
                )
            })}
            </Row>

            )}
            
        </div>
    )
}

export default HomeScreen
