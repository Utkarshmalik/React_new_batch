import React from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import {ThemeContext} from '../../Contexts/ThemeContextProvider';

function index(props) {

const {category,description,id,image,price,title}=props.product;

// const category=props.product.category;

    return (
      <ThemeContext.Consumer>


      {

        (themeData)=>
        {
          const styleObject=(themeData==="light")?{backgroundColor:"#cdcdcd",color:"black"}:({backgroundColor:"black",color:"#cdcdcd"})

          return (
            <div style={{  ...styleObject ,height:"900px",display:"inline-block",margin:"10px 10px",padding:"20px"}} >
    
            
            <Card style={{ ...styleObject, width: '18rem' }}>
      <Card.Img variant="top" height={200} width={100} src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem><strong>Category:</strong>{category}</ListGroupItem>
        <ListGroupItem><strong>Price:</strong>{price}</ListGroupItem>
        {
        // <ListGroupItem>Vestibulum at eros</ListGroupItem>
        }
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Delete</Card.Link>
        <Card.Link href="#">Add to Cart</Card.Link>
      </Card.Body>
    </Card>
            
            </div>)


        }


      }
        </ThemeContext.Consumer>

    );
}

export default index;

