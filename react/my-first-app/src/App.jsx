import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: ""
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sort, setSort] = useState("");
  const [error, setError] = useState(null);

  const fallbackProducts = [
    { id: 1, title: "Sample Product", price: 100, category: "sample" },
    { id: 2, title: "Example Item", price: 50, category: "demo" },
  ];

  //  GET PRODUCTS
  useEffect(() => {
    let active = true;
    const loadProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        if (active) setProducts(res.data);
      } catch (err) {
        console.error("Failed to load products, using fallback data:", err);
        if (active) {
          setError("Unable to reach the products API. Showing fallback data.");
          setProducts(fallbackProducts);
        }
      }
    };
    loadProducts();
    return () => {
      active = false;
    };
  }, []);

  //  INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD / UPDATE
  const handleSubmit = async () => {
    if (editId) {
      try {
        await axios.put(
          `/api/products/${editId}`,
          form
        );
      } catch (err) {
        console.warn("Update request failed, applying local update only:", err);
      }

      setProducts(
        products.map((p) =>
          p.id === editId ? { ...p, ...form } : p
        )
      );

      setEditId(null);
    } else {
      try {
        await axios.post("/api/products", form);
      } catch (err) {
        console.warn("Create request failed, adding locally only:", err);
      }

      setProducts([...products, { ...form, id: Date.now() }]);
    }

    setForm({ title: "", price: "", category: "" });
  };

  // EDIT
  const handleEdit = (p) => {
    setForm({
      title: p.title,
      price: p.price,
      category: p.category
    });
    setEditId(p.id);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
    } catch (err) {
      console.warn("Delete request failed, removing locally only:", err);
    }
    setProducts(products.filter((p) => p.id !== id));
  };

  //  SEARCH + FILTER + SORT
  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      categoryFilter ? p.category === categoryFilter : true
    )
    .sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product CRUD App</h2>
      {error && (
        <div style={{ color: "#9a031e", margin: "12px 0" }}>
          {error}
        </div>
      )}

      {/* FORM */}
      <input
        name="title"
        placeholder="Product Name"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <hr />

      {/* SEARCH + FILTER + SORT */}
      <input
        placeholder="Search Product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        placeholder="Filter Category"
        onChange={(e) => setCategoryFilter(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="price">Price</option>
        <option value="title">Name</option>
      </select>

      <hr />

      {/* LIST */}
      {filteredProducts.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <b>{p.title}</b> - ₹{p.price} - {p.category}
          <br />
          <button onClick={() => handleEdit(p)}>Edit</button>
          <button onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;