import React , {useState}from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import products from '../../products'
import { Link } from 'react-router-dom'
import "./CardProduct.css"
import axios from 'axios'
import { useEffect } from 'react'
function CardProduct() {
    const [productList, setProductList] = useState(null);
    // useEffect(() => {
    //     axios.get("http://localhost:3030/Product")
    //     .then((res)=>{
    //         // console.log(res.data)
    //         setProductList(res.data)
    //         // console.log(productList)
    //     },[productList])
    // })
    console.log("productList")
    return (
        <div>
            <Row>
                {
                    products.map((item) => {
                        return (
                            <Col key={item._id} sm={12} md={6} lg={4}>
                                <Card className='m-3 p-3  rounded' >
                                    <Link className='a' to={`/product/${item._id}`}>
                                    <Card.Img src={item.image} variant="top" />
                                    </Link>
                                    <Card.Body className='cardBody'>
                                    <Link className='a' to={`/product/${item._id}`}>
                                    <Card.Title>{item.name}</Card.Title>
                                    </Link>
                                    </Card.Body>
                                    <Card.Text as="p">{item.writer}</Card.Text>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default CardProduct
