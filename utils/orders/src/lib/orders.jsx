import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const Orders = () => {
  return (
    <div>
      <h2>Orders Component</h2>
      <p>This is the shared Orders component from the utils library.</p>

      {/* Bootstrap Button */}
      <button className="btn btn-primary">Bootstrap Button</button>
    </div>
  );
};
