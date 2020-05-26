import React, {Component} from "react";
import './searchboxstyles.css';

export const Searchbox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />

)
