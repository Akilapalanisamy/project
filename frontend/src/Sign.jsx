import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Call your registration function here
      registerUser(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const registerUser = (userData) => {
    // Here you can make an API call to your backend to register the user
    // For this example, let's just log the user data
    console.log("Registering user:", userData);
    // Clear form fields after successful registration
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        />
        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        />
        {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
      </div>
      <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign Up</button>
    </form>
  );
};

export default SignUp;
