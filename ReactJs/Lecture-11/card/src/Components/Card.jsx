import React, { useState } from 'react'
import { product } from '../Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
// import Footer from 'react-bootstrap/Footer';

const Card_1 = () => {
    const [index, setIndex] = useState(0)

    const nextIndex = () => {
        setIndex((prevIndex) => (prevIndex === product.length - 1 ? 0 : prevIndex + 1))
    }

    const prevIndex = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? product.length - 1 : prevIndex - 1))
    }

    const productData = product[index]
    
    return (
        <div className='container my-20'>
        <div className='container my-3 flex justify-between'>
                <Button variant="dark" className='btn' onClick={prevIndex}> &lArr; Prev </Button>
                <p className='text-xl'>({index + 1} of {product.length})</p>
                <Button variant="dark" className='btn' onClick={nextIndex}> Next &rArr; </Button>
        </div>
        <Card style={{ width: '25rem' }} className='flex justify-center my-4 m-auto'>
            <Card.Img variant="top" src={!productData.urlToImage ? "https://static.toiimg.com/thumb/msid-109014342,width-1070,height-580,imgsize-62210,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : productData.urlToImage} />
            <Card.Body>
                <Badge pill bg="dark" style={{fontWeight: '400'}} className="py-2 my-2"> {productData.source.name} </Badge>
                    <Card.Title>{productData.title}</Card.Title>
                    <Card.Text> {productData.description} </Card.Text>
                <Button variant="dark" className='btn-sm my-2'>
                    <a href={productData.url}> Read More </a>
                </Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">By {productData.author ? productData.author : "Unknown Author"} on {productData.publishedAt}</small>
            </Card.Footer>
        </Card>
        </div>
    )
}

export default Card_1