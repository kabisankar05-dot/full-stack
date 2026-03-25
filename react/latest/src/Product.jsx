import { useParams } from "react-router-dom";
import { products } from "./data";
import { useState } from "react";
import { Toast, ToastContainer, Button } from "react-bootstrap";

function Product() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [ show,setShow ] =useState(false);

    return(
        <div style={{textAlign:"center"}}>
            <h2>{product.name}</h2>

            <img src={product.image} alt="" />

            <br /><br />

            <button onClick={() => setShow(true)}>
                Add to Cart
            </button>

            <ToastContainer position="top-end">
                <Toast
                    show={show}
                    onClose={() => setShow(false)}
                    delay={2000}
                    autohide
                >
            <Toast.Body>Added to Cart </Toast.Body>
            </Toast>
            </ToastContainer>
        </div>
    );
}

export default Product;