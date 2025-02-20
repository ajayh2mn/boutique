import React from 'react';
import './Home.css'; // Import CSS for styling

// Sample banner image (Replace with your actual banner image URL)
const bannerImage = "https://img.lovepik.com/bg/20231220/Luxurious-Boutique-Discover-High-End-Hanging-Clothing-in-Our-Store_2654941_wh1200.jpg"; 

const sareeCollections = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: "₹2,499",
    image: "https://i.pinimg.com/originals/0d/c8/15/0dc815ce45043973f1e1b6ae2cec10dd.jpg",
    cart: "Add to cart",
  },
  {
    id: 2,
    name: "Kanchipuram Silk Saree",
    price: "₹3,999",
    image: "https://cdn.shopify.com/s/files/1/1384/4105/files/plain-silk-saree-with-golden-border_2048x2048.jpg?v=1529738800",
    cart: "Add to cart",
  },
  {
    id: 3,
    name: "Cotton Saree",
    price: "₹1,299",
    image: "https://i.pinimg.com/originals/31/3f/50/313f50e0a66f9be434d7caf0563b60c4.jpg",
    cart: "Add to cart",
  },
];

// const kanchiCollections = [
//   {
//     id: 5,
//     name: "Pure Kanchi Pattu Saree",
//     price: "₹5,499",
//     image: "https://lakshmiboutique.co.in/cdn/shop/files/39F1A645-568C-4C82-ACFA-E701C0402E57.jpg?height=720&v=1739507511",
//   },
//   {
//     id: 6,
//     name: "Traditional Kanchi Saree",
//     price: "₹6,999",
//     image: "https://lakshmiboutique.co.in/cdn/shop/files/6136186524614639548.jpg?height=533&v=1738840920",
//   },
//   {
//     id: 7,
//     name: "Kanchi Silk with Zari",
//     price: "₹7,999",
//     image: "https://lakshmiboutique.co.in/cdn/shop/files/6136186524614639537.jpg?height=720&v=1738839543",
//   },
//   {
//     id: 8,
//     name: "Handwoven Kanchi Saree",
//     price: "₹8,499",
//     image: "https://lakshmiboutique.co.in/cdn/shop/files/6158708358157289626_1.jpg?height=720&v=1739531969",
//   },
// ];

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>

      {/* New Content Section */}
      <div className="content-section">
        <h2 className="content-title">Discover the Elegance of UzhaMagal</h2>
        <p className="content-description">
          Explore our exquisite collection of traditional South Indian sarees, each crafted with precision and elegance.
          Embrace the timeless beauty and cultural heritage that our sarees represent.
        </p>
        <button className="shop-now-btn-1" onClick={() => window.location.href = "/shop"}>
    Shop Now
  </button>
      </div>

      {/* Image Row Section */}
<div className="image-row">
  {/* Image 1 - Accessories */}
  <div className="image-container">
    <img src="https://files.oaiusercontent.com/file-YLQ8WtwwQCC6EzbsLTLNJr?se=2025-02-20T10%3A02%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D54123738-d6c0-4788-96ba-2b1fd801796d.webp&sig=6NoNuxgwUcpkJ1cNAhkt6vWSJBQtJNe4tY2jsksREWg%3D" 
      alt="Accessories" className="row-image" />
    <div className="image-overlay">
      <h3 className="image-title">Accessories</h3>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  </div>

  {/* Image 2 - Blouse */}
  <div className="image-container">
    <img src="https://files.oaiusercontent.com/file-EjsrFbMuE5HMgQoxvv6pwR?se=2025-02-20T10%3A11%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D1f7f566a-3e60-4c2f-becc-67dca80c6bfb.webp&sig=/S8KKK2H5Zg86l7uchd1FXaxfPr9s9oItZzxhEBHGZQ%3D" 
      alt="Blouse" className="row-image" />
    <div className="image-overlay">
      <h3 className="image-title">Blouse</h3>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  </div>

  {/* Image 3 - Sarees */}
  <div className="image-container">
    <img src="https://files.oaiusercontent.com/file-AocFKp9TGWW2oSg2RipZhQ?se=2025-02-20T10%3A13%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc82fab83-d7a3-4a5e-a518-18583fb8887f.webp&sig=zImd8qjhwl2mPPrEx0tCRWAMB05mlzQbrenP0MsfLzM%3D" 
      alt="Sarees" className="row-image" />
    <div className="image-overlay">
      <h3 className="image-title">Sarees</h3>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  </div>
</div>



      <h2 className="collection-heading">Featured Sarees</h2>
      <p className="collection-heading-p">Discover our latest and most popular sarees.</p>
      <div className="saree-container">
        {sareeCollections.map((saree) => (
          <div key={saree.id} className="saree-card">
            <img src={saree.image} alt={saree.name} className="saree-image" />
            <h3 className="saree-name">{saree.name}</h3>
            <p className="saree-price">{saree.price}</p>
            <button className="cart-btn">{saree.cart}</button>
          </div>
        ))}
      </div>
      {/* <button className="view-all-btn" onClick={() => window.location.href = "/all-collections"}>
        View All
      </button> */}

      {/* <h2 className="collection-heading">Expo Launch Kanchi Collection</h2>
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
      </button> */}
    </div>
  );
};

export default Home;