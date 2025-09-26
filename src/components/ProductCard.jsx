const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="brand">{product.brand}</p>
      <p className="price">₹{product.price.toLocaleString()}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;