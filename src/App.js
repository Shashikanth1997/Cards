import React from 'react'

import {Card,Button} from "react-bootstrap"  
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
function App() {
  return (
    <div> 

        <h1 className="text-center text-success my-5 ">Bootstrap Cards</h1> 
        <div className='container'>
            <div className='row'> 
            <div className='col-md-4'>
            <Card >
      <Card.Img variant="top" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div> 
            <div className='col-md-4'>
            <Card >
      <Card.Img variant="top" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className='col-md-4'>
            <Card >
      <Card.Img variant="top" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> 
      
    </Card>
            </div>

            </div>
        </div> 
        <i class="fa-thin fa-alarm-exclamation"></i>
    </div>
  )
}

export default App