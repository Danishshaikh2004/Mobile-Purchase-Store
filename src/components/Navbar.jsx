import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login', { state: { isLogin: true } });
  };

  const handleSignupClick = () => {
    navigate('/login', { state: { isLogin: false } });
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleTitleClick = () => {
    navigate('/dashboard');
  };

  return (
    <nav className="navbar">
      <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>Mobile Store</h1>
      <div className="nav-buttons">
        {user === null ? (
          <>
            <button onClick={handleLoginClick} className="auth-btn">
              Login
            </button>
            <button onClick={handleSignupClick} className="auth-btn signup-btn">
              Sign Up
            </button>
          </>
        ) : user ? (
          <>
            <button onClick={handleCartClick} className="nav-btn">
              Cart
            </button>
            <button onClick={logout} className="nav-btn logout-btn">
              Logout
            </button>
          </>
        ) : (
          <div className="loading-auth">Loading...</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
