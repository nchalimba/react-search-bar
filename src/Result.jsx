import React from 'react';

const Result = ({ title, description, price, rating, category }) => {
  // Renders the result, this can be replaced by any component you prefer
  return (
    <div>
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <p>
        <b>Rating:</b> {rating}
      </p>
      <p>
        <b>Category:</b> {category}
      </p>
    </div>
  );
};

export default Result;
