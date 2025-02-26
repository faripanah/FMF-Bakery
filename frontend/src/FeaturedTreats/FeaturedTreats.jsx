import "./FeaturedTreats.css";

// ✅ Import new images
import treat1 from "../assets/Images/treat1.jpg";
import treat2 from "../assets/Images/treat2.jpg";
import treat3 from "../assets/Images/treat3.jpg";
import cookie2 from "../assets/Images/cookie2.png";  // ✅ New Image
import peanutcookie from "../assets/Images/peanutcookie.png";  // ✅ New Image

const FeaturedTreats = () => {
  const treats = [
    { id: 1, name: "Puff Pastry", price: 10, image: treat1 },
    { id: 2, name: "Doughnuts", price: 12, image: treat2 },
    { id: 3, name: "Brownies", price: 12, image: treat3 },
    { id: 4, name: "Cookie", price: 6, image: cookie2 },  // ✅ New Treat
    { id: 5, name: "Peanut Cookie", price: 7, image: peanutcookie },  // ✅ New Treat
  ];

  return (
    <div className="featured-section">
      <h2 className="featured-title">Featured Treats</h2>
      <div className="featured-grid">
        {treats.map((treat) => (
          <div key={treat.id} className="featured-card">
            <img src={treat.image} alt={treat.name} />
            <div className="featured-info">
              <h3>{treat.name}</h3>
              <p>€{treat.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTreats;
