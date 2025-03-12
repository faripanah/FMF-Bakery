/*import Menu from "../../components/menu/Menu";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import PromoSection from "../../components/promoSection/PromoSection";

import FeaturedTreats from "./components/FeaturedTreats"; 
const Home = () => {
    return (
      <div className="home">
        
        <Hero />
        <FeaturedTreats />
        <PromoSection />
       <Menu />
       <Footer/> 
      </div>
    );
  };
  
  export default Home;
  */
  import Menu from "../../components/menu/Menu";
  import Hero from "../../components/hero/Hero";
  import Footer from "../../components/footer/Footer";
  import PromoSection from "../../components/PromoSection/PromoSection"; // ✅ Fixed import
  import FeaturedTreats from "../../components/FeaturedTreats/FeaturedTreats"; // ✅ Fixed import
  
  const Home = () => {
    return (
      <div className="home">
        <Hero />
        <PromoSection />
        <Menu />
        <FeaturedTreats />
        <Footer />
      </div>
    );
  };
  
  export default Home;
  
