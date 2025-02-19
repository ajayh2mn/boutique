import React from 'react';
import './Home.css'; // Import CSS for styling

// Sample saree data (replace with actual data)
const sareeCollections = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: "₹2,499",
    image: "https://lakshmiboutique.co.in/cdn/shop/files/6168113589211217637.jpg?height=350&v=1739767984", // Replace with actual saree image URL
  },
  {
    id: 2,
    name: "Kanchipuram Silk Saree",
    price: "₹3,999",
    image: "https://lakshmiboutique.co.in/cdn/shop/files/2C1DCAE0-5DE3-4608-9B9D-08092F6B9C79.jpg?height=720&v=1738587488",
  },
  {
    id: 3,
    name: "Cotton Saree",
    price: "₹1,299",
    image: "https://lakshmiboutique.co.in/cdn/shop/files/EBE5C864-F0AA-4920-B019-9D19D3F45F69.jpg?height=720&v=1739682691",
  },
  {
    id: 4,
    name: "Georgette Saree",
    price: "₹1,799",
    image: "https://lakshmiboutique.co.in/cdn/shop/files/6161046740216693295.jpg?height=720&v=1739619058",
  },
];

const kanchiCollections = [
    {
      id: 5,
      name: "Pure Kanchi Pattu Saree",
      price: "₹5,499",
      image: "https://lakshmiboutique.co.in/cdn/shop/files/39F1A645-568C-4C82-ACFA-E701C0402E57.jpg?height=720&v=1739507511",
    },
    {
      id: 6,
      name: "Traditional Kanchi Saree",
      price: "₹6,999",
      image: "https://lakshmiboutique.co.in/cdn/shop/files/6136186524614639548.jpg?height=533&v=1738840920",
    },
    {
      id: 7,
      name: "Kanchi Silk with Zari",
      price: "₹7,999",
      image: "https://lakshmiboutique.co.in/cdn/shop/files/6136186524614639537.jpg?height=720&v=1738839543",
    },
    {
      id: 8,
      name: "Handwoven Kanchi Saree",
      price: "₹8,499",
      image: "https://lakshmiboutique.co.in/cdn/shop/files/6158708358157289626_1.jpg?height=720&v=1739531969",
    },
  ];
  

const Home = () => {
    return (
      <div className="home-container">
        <h2 className="collection-heading">New Arrival Collections</h2> {/* Added heading */}
        <div className="saree-container">
          {sareeCollections.map((saree) => (
            <div key={saree.id} className="saree-card">
              <img src={saree.image} alt={saree.name} className="saree-image" />
              <h3 className="saree-name">{saree.name}</h3>
              <p className="saree-price">{saree.price}</p>
            </div>
          ))}
        </div>
        <button className="view-all-btn" onClick={() => window.location.href = "/all-collections"}>
        View All
      </button>

      {/* Expo Launch Kanchi Collection */}
      <h2 className="collection-heading">Expo Launch Kanchi Collection</h2>
      <div className="saree-container">
        {kanchiCollections.map((saree) => (
          <div key={saree.id} className="saree-card">
            <img src={saree.image} alt={saree.name} className="saree-image" />
            <h3 className="saree-name">{saree.name}</h3>
            <p className="saree-price">{saree.price}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn" onClick={() => window.location.href = "/kanchi-collections"}>
        View All
      </button>
      </div>
    );
  };

export default Home;
