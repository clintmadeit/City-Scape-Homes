import React from "react";

export default function Wishlist({ listings }) {
  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing._id}>{listing.title}</li>
        ))}
      </ul>
    </div>
  );
}
