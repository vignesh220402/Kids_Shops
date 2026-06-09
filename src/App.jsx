import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // 💡 Added useLocation for tracking route changes
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchFilter from "./components/Searchfile";
import ProductGrid from "./components/Product";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [altImg, setAltImg] = useState("");
  useEffect(() => {
    const verifiedKidsStoreDatabase = [
      {
        id: 101,
        name: "Premium Soft Teddy Bear XL",
        price: 1299,
        category: "toys",
        img: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=500&q=80",
        desc: "Super huggable premium pink teddy bear for cozy kids sleep time.",
        rating: 4.9,
      },
      {
        id: 102,
        name: "Kids Smart Learning Blocks Set",
        price: 890,
        category: "games",
        img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
        desc: "Colorful educational wooden blocks to boost child creativity and logic.",
        rating: 4.8,
      },
      {
        id: 103,
        name: "Cute Pink Cotton Princess Dress",
        price: 2499,
        category: "clothes",
        img: "https://bucket.trulle.in/cutebae_app/file/Gemini_Generated_Image_gw3rf2gw3rf2gw3r_11zon_20260105T175015505.jpg",
        desc: "Beautiful premium pink cotton apparel crafted for comfortable princess vibes.",
        rating: 5.0,
      },
      {
        id: 104,
        name: "Little Boy Denim Casual Combo",
        price: 1999,
        category: "clothes",
        img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500&q=80",
        desc: "Smart blue denim jacket with matching premium white cotton t-shirt.",
        rating: 4.7,
      },
      {
        id: 105,
        name: "Cute Bunny Velvet School Bag",
        price: 1150,
        category: "essentials",
        img: "https://images.unsplash.com/photo-1546198632-9ef6368bef12?w=500&q=80",
        desc: "Ultra light-weight plush velvet back-pack for kindergarten kids.",
        rating: 4.6,
      },
      {
        id: 106,
        name: "Electric Remote Control Racing Car",
        price: 3200,
        category: "toys",
        img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500&q=80",
        desc: "High-speed 4WD rechargeable remote control monster truck toy.",
        rating: 4.9,
      },
      {
        id: 107,
        name: "Kids Pastel Feeding Bowl & Spoon Set",
        price: 550,
        category: "essentials",
        img: "https://i5.walmartimages.com/seo/LotFancy-12-in-Brown-Teddy-Bear-Stuffed-Animal-Plush-Toy_a066898a-c4a6-4019-a3c8-1e13f2c9dc39.f9d13303c3d99fa4ab6a31262cf1a07f.jpeg",
        desc: "BPA-free medical grade silicone blue safe feeding kit for babies.",
        rating: 4.5,
      },
      {
        id: 108,
        name: "Interactive Musical Dancing Duck",
        price: 1450,
        category: "toys",
        img: "https://tse3.mm.bing.net/th/id/OIP.btHzZ6mQBgquJOUwMfhKkQHaEJ?pid=Api&P=0&h=180",
        desc: "Cute yellow duck toy with lights and interactive rhythm sounds.",
        rating: 4.8,
      },
    ];

    const formattedData = verifiedKidsStoreDatabase.map((item, index) => ({
      ...item,
      bgColor:
        index % 2 === 0
          ? "rgba(219, 234, 254, 0.5)"
          : "rgba(253, 242, 248, 0.5)",
    }));

    setTimeout(() => {
      setProducts(formattedData);
      setFilteredProducts(formattedData);
      setLoading(false);
    }, 800);

    if (verifiedKidsStoreDatabase.length > 0) {
      let alter = Math.floor(Math.random() * verifiedKidsStoreDatabase.length);
      let imgurl = verifiedKidsStoreDatabase[alter].img;
      setAltImg(imgurl);
    }
  }, []);
  useEffect(() => {
    let result = [...products];

    if (filter !== "all") {
      result = result.filter((p) => p.category === filter);
    }

    if (searchTerm.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (sortBy === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [filter, searchTerm, sortBy, products]);

  // Cart Handler
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "transparent",
        }}
      >
        <h2 style={{ color: "#1e3a8a", fontFamily: "sans-serif" }}>
          💎 Glassmorphism KidsZone Please wait...
        </h2>
      </div>
    );
  }
  return (
    <div>
      <Navbar cartCount={cart.length} onFilterChange={setFilter} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home altImg={altImg} />
              <SearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortBy={sortBy}
                setSortBy={setSortBy}
                currentFilter={filter}
                setFilter={setFilter}
              />
              <ProductGrid
                filteredProducts={filteredProducts}
                addToCart={addToCart}
              />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mybags" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
