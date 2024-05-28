import React, { useState } from 'react';

const News= () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to handle form submission (e.g., subscribe user to newsletter)
    console.log('Subscribed with email:', email);
    // Reset email input after submission
    setEmail('');
  };

  return (
    <div className="newsletter-signup" style={{ fontSize: '2.5rem' }}>
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default News;
