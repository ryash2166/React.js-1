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
        <div className='bg-gray-500 p-2' style={{background: 'linear-gradient(to right, #430089, #82ffa1)'}}>
        <div className='container my-3 flex justify-between'>
                <Button className='btn border-0' onClick={prevIndex} style={{background: 'linear-gradient(to right, #430089, #82ffa1)'}}> &lArr; Prev </Button>
                <p className='text-xl text-white'>({index + 1} of {product.length})</p>
                <Button className='btn border-0' onClick={nextIndex} style={{background: 'linear-gradient(to right, #430089, #82ffa1)'}}> Next &rArr; </Button>
        </div>
        <Card style={{ width: '25rem' }} className='flex justify-center my-4 m-auto'>
            {/* <Card.Img variant="top" src={!productData.urlToImage ? "https://static.toiimg.com/thumb/msid-109014342,width-1070,height-580,imgsize-62210,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : productData.urlToImage} /> */}
            <Card.Img variant='top' src={productData.urlToImage} />
            <Card.Body>
                <Badge pill style={{fontWeight: '500', background: 'linear-gradient(to left, #430089, #82ffa1)'}} className="p-2 mb-2"> {productData.source.name} </Badge>
                    <Card.Title>{productData.title}</Card.Title>
                    <Card.Text> {productData.description} </Card.Text>
                <Button className='my-2 border-0' style={{background: 'linear-gradient(to left, #430089, #82ffa1)'}}>
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