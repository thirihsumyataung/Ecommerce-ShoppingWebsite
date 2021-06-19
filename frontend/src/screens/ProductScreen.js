import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products"; 
const ProductScreen = ({match}) => {
    const product = products.find(p => p._id === match.params.id)
    console.log(product); 
    return (
        <>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={ `${product.numReviews} reviews` }/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                         <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col>${product.price}</Col>
                                </Row>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                     <Button className="btn btn-black" type="button" disabled={product.countInStock === 0} style={{margin: "flex"}}>   ADD To Cart   </Button>
                                </Row>
                                   
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                
                </Col>
            </Row>

        </>
        
    )
}

export default ProductScreen
