import Menu from "../../components/menu/Menu";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import PromoSection from "../../components/promoSection/PromoSection";
import FeaturedTreats from "../../components/featuredTreats/FeaturedTreats";  
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
  