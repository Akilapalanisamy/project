import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Reviews from "../component/Reviews";
import News from "../component/News";


const Home = () => {
  return (
    <div>
    <h1 style={{color:"blueviolet"}}>Welcome to Our Website!</h1>
    
    <div style={{ position: 'relative' }}>
      <Container>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="data:image/jpeg;base64,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"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgR10Wqoj4wnNA30pbMBMZy8qK3s3pYMHNQ&s"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDG-sqGhhH-9ZJjLyGXFiMt8efWhTmekfDu5f6NtyCNFHT3R8oUMrSKK5MNSz04dOzq6Q&usqp=CAU"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container><br></br>

      <Container>
        <div>
        <h1>
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          Master Your Skills: 
        {" "}
        "Unlock Your Potential with Expert-led Online Courses"
        </span>
      </h1>
      <div className="featured-section" style={{ fontSize: '2.5rem' }} > 
        <h1 style={{ fontSize: '2.5rem' }} ><b>Featured Content</b></h1>
        Learn from Industry Experts
Gain insights from seasoned professionals with real-world experience in the programming industry. Our courses are curated and delivered by industry leaders, ensuring you receive the most relevant and up-to-date knowledge.

Interactive Learning Experience
Engage in hands-on coding exercises, projects, and quizzes to reinforce your understanding and apply what you've learned. Our interactive platform provides a dynamic learning experience tailored to your pace and skill level.

Diverse Course Catalog
Explore a wide range of programming languages, frameworks, and topics, including but not limited to:

Web Development (HTML, CSS, JavaScript, React, Angular, Vue.js)
Mobile App Development (iOS, Android, Flutter)
Backend Development (Node.js, Python, Ruby on Rails)
Data Science and Machine Learning (Python, TensorFlow, PyTorch)
Software Engineering Best Practices (Agile, DevOps, Clean Code)
Flexible Learning Options
Choose from self-paced courses, live instructor-led sessions, or a combination of both. Whether you're a beginner starting your coding journey or an experienced developer looking to level up, our flexible learning options cater to your needs.

Career Support and Guidance
Access career resources, job placement assistance, and mentorship opportunities to accelerate your career growth. We're committed to helping you succeed in the competitive field of programming.

Start Your Journey Today
Unlock your potential and embark on a rewarding journey of mastering programming skills with MasterSkill. Enroll now and take the first step towards a successful career in tech.
      </div>
      <div className="recent-posts" style={{ fontSize: '2.5rem' }}>
        <h1><b>Recent Posts</b></h1>
        <li> The Importance of Version Control in Software Development
Learn why version control is essential for collaboration, code management, and project stability. Discover best practices and tools to streamline your development workflow.
</li><br></br>
<li> Exploring the Fundamentals of Object-Oriented Programming
Dive into the core concepts of object-oriented programming (OOP) and understand how to create reusable and maintainable code structures. Master key principles such as encapsulation, inheritance, and polymorphism.
</li><br></br>
<li>Building Responsive Web Design with CSS Grid and Flexbox
Explore modern CSS techniques to create responsive and visually appealing web layouts. Learn how to leverage CSS Grid and Flexbox to design flexible and adaptive websites for various screen sizes and devices.
</li><br></br>
<li> Introduction to Data Structures and Algorithms
Gain a solid foundation in data structures and algorithms essential for solving complex programming problems. Understand common data structures like arrays, linked lists, stacks, queues, and trees, along with algorithms for searching, sorting, and graph traversal.
</li><br></br>
<li>Getting Started with React: Building Interactive User Interfaces
Discover the basics of React.js, a popular JavaScript library for building dynamic and interactive user interfaces. Learn how to create components, manage state, handle events, and integrate React with other libraries and frameworks.
</li><br></br>
<li>The Power of Functional Programming Paradigm: An Introduction to Haskell
Explore the functional programming paradigm using Haskell, a purely functional programming language. Understand the principles of immutability, higher-order functions, lazy evaluation, and pattern matching, and learn how to write elegant and concise code.
</li><br></br>
Stay Updated!
Stay tuned for more insightful posts and tutorials to enhance your programming skills and stay ahead in the ever-evolving tech industry.
      </div><br></br>
      <div className="newsletter-subscribe" style={{ fontSize: '3rem' }}>
        <h1 ><b>Subscribe to Our Newsletter</b></h1><br></br>
      <h2 style={{ fontSize: '2.5rem' }}>  Stay informed about the latest course updates, industry trends, and exclusive offers by subscribing to our newsletter. Join our community of learners and take your programming skills to the next level!
      </h2><br></br>
<h2 style={{ fontSize: '3rem' }}>Simply enter your email address below to subscribe:</h2>

<News />

By subscribing, you agree to receive promotional emails from MasterSkill. You can unsubscribe at any time. We respect your privacy and will not share your information with third parties.

<br></br>
      </div>
        </div>
        <br></br>
        <div className='row justify-content-center'>
    <div className='ratio ratio-16x9'>
      <iframe
        className='shadow-1-strong rounded'
        src='https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com'
        title='YouTube video'
        allowFullScreen
        data-gtm-yt-inspected-2340190_699='true'
        id='388567449'
        width='900'  // Set your desired width here
        height='500' // Set your desired height here
      ></iframe>
      </div>
      </div>
</Container>
<Reviews/>

    </div>
    </div>
  );
}

export default Home;

