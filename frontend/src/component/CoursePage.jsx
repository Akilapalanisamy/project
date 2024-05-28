import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CoursePage() {
  return (
    
    <div className='container' style={{ marginTop: '50px' }}>
        <h2><b>Course Available</b></h2>
        <Row xs={1} sm={2} md={3} lg={3} xl={4} xxl={5}>
        
        <Col sm={3}></Col>
      </Row>
      <Row>
      <Col sm>
    <Card style={{ width: '20rem',marginTop: '60px' }}>
      <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAjVBMVEX/3wAAAAD/7QDq0gBHPgD/4gD/5AD/5gBdUgD/6gD/6AAwKABPRQD73gD22gDw1QCGdQAlIADexgBYTQBtXwA6MgAzLAASDwArJADVvQAbFgBzZAC8pgAhHQDFrAA3LwCQfgCxngCfjABANwCokwB8bACWhADHswAMCQC+rACnmABmWQDozAB3bQBvZgB3rRUqAAAE6klEQVR4nO2a23aiMBRAjZDEIBdFq1KVAiq01Zn//7wJWqtJICAanYez1+pLNYttbpxzkl4PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgvwVTdsYh+ClPDCyBuu9RHIRxsrSH6/GHu8vjMCDEuFx/Oh5eWEyq7RxaJC4ScJOCOqblBsIj7So54sX2J1L4dFfYbO+1kKPRRDU7sY+Mdl6jHGbZe50bQu8pe6Ec9nf1aiUj73VyzlLvxu36r5LDoyY3hBJjq0IvR1bNbgitTK0KrRy2NGvhisBQ32nlWItBLZkaWhQ6OXwYt5NDKzNdp5MjmaqxsN/Uoc4sM3GATs4fyBZ5aPFAIUrWQpuIGopRNHI4lNSmFjtaEBZcduZ1RqkZNa0cjUW3ufc7swhOfv45CY2paeUcacoV1xqnhfyRMpNRp0aOTYWPXHEL9G2ElpbBbtPL9cVISdrMaLGJTS2ENnJi7LuUdlovMNttDXJSz/lSU/M5jm7O7YWPhuFTMq62conwEcpMBr23ytFUlEOh6WzrBjkSSXKzyOiudpNcz1pIdiixTO8ereU8Nbext/iJvaeTUyZdyXtuGU6l28lhvzLYHI8ic4FIaznl1X9m7hb+MyafPsHxN9V2CG22lmNcryE1/KqT4+FS4r3wxV9SN7BHPrPA7LbcWCuZ1pgdcV8WbJ7kcFIjduJVYfqPHdVn1ov0ZYWcEieeafVGvqmhbVN2dULtxEMDU7X1NnJ8aOPaDa9kaqjvWsnx16yfKiHKFTszcWhLOd55Qaop66RGNry2clzP6a1q594iNBGptJcre8+L6srXo1fLlX59P7Mr7Q4G7G6UK0fXWlVNvtzAmrhZrhxdZ+Uqcm8GSq8d5DhOkMty6+jx49pNjg9uMZfsvh8fAXSU451XrEW5/L/puZ56DrB7/KRrliM1r3UciHL3H0YoD5LqXGqw6VjLmvISFcd1L5fIblZbyQ/qi7GaK8lRiwfC++qpzsTfNblPjh12aCTtlX1xbCaB8GOc9Pg6qD7xdTaPk6PBMZMSauLKxLmurRIc/Tx+/lXRd9iX5lx3Oczi065uB9cD60hnlqPLh8y6vOQXkdp37Fts2nm1YnqJtHf4ys4TS6soO3cR8fPrM671l5xAk/CtpumNUH97dfUip7/bJUvFB6Dz+OFUjj0STyg/sFD+QtpNDkfiktxZlG9ehP/JB9Hv5zEnas5gbz1CCebwln4qZ2SLbvVs9Zx+nn9FYVRsldjCPk8tEssflc/fpUV4OByiVa4mFJNuHVd1bIrGs6qgbPubCuDqWxHz2WbzVplLdB1VX42+qvm87HLYWzd//4pZ1+xQPpus5Woj6VFN9auCbeeAqd9wq+aH4UG3BWrZd8+qcVCdlEhkYvJJlWi3nnvSGxLoazGnXy8/gG7busV3RcE0arSz1SsOzkqOxU248b47NIzssOpaDQ1bLPTFvW7l9UHtqlhWX/khvbzp4sveekCdBOO4fpAyr25Gk8O+thVnnPqPSWwoVl9YJbNRoEnXcd+SL5P+MtiSx5WXHKtQCkV2emioTGIaxIn6wljkhf/YXJUwJ/z+Mx24nMn0bxbzf7TYQAljfpH/mU5c13bdwfQvF2vV8GY/h1Ev4PhcrP2EwdRhxA8C69iQmTy9KeOyru2efhEBAABz/AOhOEURxdg4AQAAAABJRU5ErkJggg==" />
      <Card.Body>
        <Card.Title><u>JAVASCRIPT</u></Card.Title>
        <Card.Text>
        <b>The Complete JavaScript Course 2024: From Zero to Expert!</b>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><li>The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!</li>
<li>Become an advanced, confident, and modern JavaScript developer from scratch</li>
<li>Become job-ready by understanding how JavaScript really works behind the scenes</li></ListGroup.Item>
        <ListGroup.Item>₹399</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',marginTop: '60px' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/143/143655.png" />
      <Card.Body>
        <Card.Title><u>HTML 5</u></Card.Title>
        <Card.Text><b>
        HTML 5 - Certification Course for Beginners with full course guide.</b>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><li>Learn HTML5 by building a modern looking responsive website.</li>
<li>You will learn about media queries and will able to make website perfect for responsive design.</li>
<li>You will see, the complete web development process from start to finish project.</li></ListGroup.Item>
        <ListGroup.Item>₹399</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',marginTop: '60px' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" />
      <Card.Body>
        <Card.Title>BOOTSTRAP 5</Card.Title>
        <Card.Text>
          <b>Bootstrap 5 Course - The Complete Guide Step by Step (2024)</b>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><li>You will learn the Latest Bootstrap v5.2 Framework</li>
        <li>You will learn to Build customized Bootstrap 5 Web Apps</li>
        <li>Complete Bootstrap Implementation into any website</li>
        <li>You will learn to create responsive images, tables and typography</li>
        </ListGroup.Item>
        <ListGroup.Item>₹399</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',marginTop: '60px' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" />
      <Card.Body>
        <Card.Title><u>PYTHON</u></Card.Title>
        <Card.Text><b>
        The Complete Python Pro Bootcamp</b>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><li>You will be able to program in Python professionally</li><li>Be able to use Python for data science and machine learning</li>
        <li>You will learn automation, game, app and web development, data science and machine learning all using Python.</li></ListGroup.Item>
        <ListGroup.Item>₹399</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',marginTop: '60px' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/1/1975.png" />
      <Card.Body>
        <Card.Title>PHP</Card.Title>
        <Card.Text>
          <b>PHP From Scratch 2024 | Beginner To Advanced</b>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><li>Learn the fundamentals of PHP programming</li><li>Build a job listing website from the ground up without using any frameworks or libraries</li>
        <li>Learning modules for data types, functions, loops, OOP, databases.</li>

      
       </ListGroup.Item>
        <ListGroup.Item>₹399</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',marginTop: '60px' }}>
      <Card.Img variant="top" src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title>NODE JS</Card.Title>
        <Card.Text>
         <b>React - The Complete Guide 2024 (incl. Next.js, Redux)</b>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><li>Learn React from the ground up and finish the course as an advanced React developer</li>
        <li>Manage complex state efficiently with React's Context API & React Redux</li>
        <li>Learn about routing & route-related data fetching with React Router</li></ListGroup.Item>
        <ListGroup.Item>₹399</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',marginTop: '60px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iNA9-jFbNje9SNCj8WJUrnGHVZsdbnwWnw&s" />
      <Card.Body>
        <Card.Title>REACT JS</Card.Title>
        <Card.Text>
         <b>React - The Complete Guide 2024 (incl. Next.js, Redux)</b>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><li>Learn React from the ground up and finish the course as an advanced React developer</li>
        <li>Manage complex state efficiently with React's Context API & React Redux</li>
        <li>Learn about routing & route-related data fetching with React Router</li></ListGroup.Item>
        <ListGroup.Item>₹399</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem',marginTop: '60px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tDc_k7lXn5GGuWYoxbtHMfxdvBDYfSrw7w&s" />
      <Card.Body>
        <Card.Title>REACT JS</Card.Title>
        <Card.Text>
         <b>React - The Complete Guide 2024 (incl. Next.js, Redux)</b>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><li>Learn React from the ground up and finish the course as an advanced React developer</li>
        <li>Manage complex state efficiently with React's Context API & React Redux</li>
        <li>Learn about routing & route-related data fetching with React Router</li></ListGroup.Item>
        <ListGroup.Item>₹399</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    
    </div>

  );
}

export default CoursePage;