import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from 'react-bootstrap/Button';

export const Orders = () => {
  return (
    <div className="p-4">
      <h2>Orders Page</h2>
      <Button variant="primary">Place Order</Button>
      {/* Bootstrap Button */}
      <button className="btn btn-primary">Bootstrap Button</button>
    </div>
  );
};
