import img1 from '../assets/Images/hero.png';

function Hero() {
    return (
        <section className="hero">
          {/* Hero Image */}
          <img  className="hero-image"
              src={img1}
              alt="hero background image"
            />
          {/* Hero Content */}
        
            <h2 className="hero-subtitle">Delicious Cafe</h2>
            <h1 className="hero-title">Sweet Treats, Perfect Eats</h1>
            <button className="hero-btn">Shop Now</button>
          
    
          
                 
        </section>
      );
    };
    
    export default Hero;