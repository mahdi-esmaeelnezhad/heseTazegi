import React from 'react'
import products from '../../products'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import "./ProductP.css"

function ProductP({ match }) {
  const { id } = useParams()
  const product = products.find((item) => {
    return (
      item._id === id
    )
  })
  return (
    <div >
      <Link className='back' to="/">back to home</Link>
      <Row md={12}>
        <Image className='imgCard' src={product.image} />
          <h3>{product.name}</h3>
      </Row>
      <Row md={12}>
        <div className='bodyProduct'>
          <p>{product.description}</p>
          <p>{product.writer}</p>
        </div>
      </Row>
    </div>
  )
}

export default ProductP
