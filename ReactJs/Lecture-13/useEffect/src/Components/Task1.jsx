import { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Task1() {

    const [image , setImage] = useState([]);

    const getImage = async () => {
        const res = await fetch('https://fakestoreapiserver.reactbd.com/tech');
        setImage( await res.json());
    }

    useEffect( () => {
        getImage()
    } , [])

    return (
        <>
        <div className="row">

            {
                image.map((ele) => {
                    return(
                        <div className='my-3 col-md-4'>
                        <Card className='shadow-xl'>
                            <Card.Img variant="top" src={ele.image} />
                            <Card.Body>
                                <Badge pill bg="dark" style={{fontWeight: '400'}} className="py-2 my-2 px-3"> {ele.category} </Badge>
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Text>
                                {ele.description}
                                </Card.Text>
                                <Button variant="dark" className='btn-sm my-2'>Shop Now</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })
            }
        </div>
    </>
  );
}

export default Task1;