import { useState } from "react";
import { products } from "./data";
import { useNavigate } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";

function Category() {
  const [showProducts, setShowProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      setShowToast(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Category</h1>

      <h2>Show My Products</h2>

      <button style={styles.showBtn} onClick={() => setShowProducts(true)}>
        Show Products
      </button>

      <hr />

      {/* Product Names */}
      {showProducts && (
        <div style={styles.btnContainer}>
          <h3>Select a Product:</h3>
          {products.map((item) => (
            <button
              key={item.id}
              style={styles.productBtn}
              onClick={() => setSelectedProduct(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      <hr />

      {/* 🔥 3 Cards Show */}
      {selectedProduct && (
        <div style={styles.cardContainer}>
          {selectedProduct.images.map((img, index) => (
            <div key={index} style={styles.card}>
              <h3>{selectedProduct.name}</h3>

              <img src={img} alt="" style={styles.img} />

              <button style={styles.cartBtn} onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Toast */}
      <ToastContainer position="top-end">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2000}
          autohide
        >
          <Toast.Body>Added to Cart ✅</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center"
  },

  showBtn: {
    padding: "10px 20px",
    background: "purple",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  btnContainer: {
    display: "flex",
    gap: "15px",
    justifyContent: "center"
  },

  productBtn: {
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  card: {
    width: "250px",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    transition: "0.3s"
  },

  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  cartBtn: {
    marginTop: "10px",
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Category;