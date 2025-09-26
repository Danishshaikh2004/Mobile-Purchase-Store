import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login', { state: { isLogin: false } });
  };

  const handleShopNow = () => {
    navigate('/login', { state: { isLogin: true } });
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Mobile Store</h1>
        <p className="hero-subtitle">Discover the latest smartphones and accessories</p>
        <div className="hero-buttons">
          <button onClick={handleShopNow} className="primary-btn">
            Shop Now
          </button>
          <button onClick={handleGetStarted} className="secondary-btn">
            Get Started
          </button>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <h3>Latest Devices</h3>
          <p>Explore our wide range of smartphones from top brands</p>
        </div>
        <div className="feature">
          <h3>Best Prices</h3>
          <p>Competitive prices with regular discounts and offers</p>
        </div>
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery to your doorstep</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
