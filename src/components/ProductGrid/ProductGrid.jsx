
import React, { useState, useRef } from "react";
import { cakes } from "../../data/products";
import "./ProductGrid.css";

// Filter categories and options (all lowercase)
const FILTER_CATEGORIES = [
  { key: "price", label: "Price" },
  { key: "flavour", label: "Flavour" },
  { key: "weight", label: "Weight" },
  { key: "ingredient", label: "Ingredient" }
];

const priceRanges = [
  { label: "Any", min: 0, max: 100000 },
  { label: "10 - 20", min: 10, max: 20 },
  { label: "21 - 50", min: 21, max: 50 },
  { label: "51+", min: 51, max: 10000 }
];
// All filter options lowercase to match the products data.
const flavours = ["any", "chocolate", "vanilla", "strawberry", "lemon", "caramel"];
const weights = ["any", "150gm", "500gm", "1kg", "2kg"];
const ingredients = ["any", "egg", "eggless"];

const ProductGrid = () => {
  // Card hover: carousel logic
  const [hoveredCard, setHoveredCard] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselTimer = useRef(null);

  // Sidebar expand/collapse section
  const [openCategory, setOpenCategory] = useState(null);

  // Filter states
  const [selectedPriceIdx, setSelectedPriceIdx] = useState(0);
  const [selectedFlavour, setSelectedFlavour] = useState("any");
  const [selectedWeight, setSelectedWeight] = useState("any");
  const [selectedIngredient, setSelectedIngredient] = useState("any");

  // For carousel hover
  const handleMouseEnter = (idx, imagesLen) => {
    setHoveredCard(idx);
    setCarouselIdx(0);
    carouselTimer.current = setInterval(() => {
      setCarouselIdx(prev => (prev + 1) % imagesLen);
    }, 1500);
  };
  const handleMouseLeave = () => {
    setHoveredCard(null);
    setCarouselIdx(0);
    clearInterval(carouselTimer.current);
  };

  // Filtering logic
  const filteredCakes = cakes.filter(cake => {
    const priceOK =
      selectedPriceIdx === 0 ||
      (cake.price >= priceRanges[selectedPriceIdx].min &&
        cake.price <= priceRanges[selectedPriceIdx].max);

    // Flavour filter (case insensitive)
    const flavourOK =
      selectedFlavour === "any" ||
      (cake.flavour.toLowerCase() === selectedFlavour.toLowerCase());

    // Weight filter (cake.weight as array support)
    const weightOK =
      selectedWeight === "any" ||
      (Array.isArray(cake.weight)
        ? cake.weight.some(w => w.toLowerCase() === selectedWeight.toLowerCase())
        : cake.weight.toLowerCase() === selectedWeight.toLowerCase());

    // Ingredient filter (case insensitive)
    const ingredientOK =
      selectedIngredient === "any" ||
      (cake.ingredient.toLowerCase() === selectedIngredient.toLowerCase());

    return priceOK && flavourOK && weightOK && ingredientOK;
  });

  // Render inputs for each subcategory
  const renderSubcategory = cat => {
    switch (cat) {
      case "price":
        return (
          <div className="filter-subcategory">
            {priceRanges.map((range, idx) => (
              <label key={range.label}>
                <input
                  type="radio"
                  name="price"
                  checked={selectedPriceIdx === idx}
                  onChange={() => setSelectedPriceIdx(idx)}
                />
                <span className="filter-label">{range.label}</span>
              </label>
            ))}
          </div>
        );
      case "flavour":
        return (
          <div className="filter-subcategory">
            {flavours.map(flavour => (
              <label key={flavour}>
                <input
                  type="radio"
                  name="flavour"
                  checked={selectedFlavour === flavour}
                  onChange={() => setSelectedFlavour(flavour)}
                />
                <span className="filter-label">{flavour.charAt(0).toUpperCase() + flavour.slice(1)}</span>
              </label>
            ))}
          </div>
        );
      case "weight":
        return (
          <div className="filter-subcategory">
            {weights.map(weight => (
              <label key={weight}>
                <input
                  type="radio"
                  name="weight"
                  checked={selectedWeight === weight}
                  onChange={() => setSelectedWeight(weight)}
                />
                <span className="filter-label">{weight}</span>
              </label>
            ))}
          </div>
        );
      case "ingredient":
        return (
          <div className="filter-subcategory">
            {ingredients.map(ing => (
              <label key={ing}>
                <input
                  type="radio"
                  name="ingredient"
                  checked={selectedIngredient === ing}
                  onChange={() => setSelectedIngredient(ing)}
                />
                <span className="filter-label">{ing.charAt(0).toUpperCase() + ing.slice(1)}</span>
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-container-flex">
     
      <aside className="filter-sidebar">
        <div className="filter-title">Filters</div>
        <div className="filter-list">
          {FILTER_CATEGORIES.map(({ key, label }) => (
            <div key={key} className="filter-category">
              <button
                type="button"
                className="filter-category-btn"
                onClick={() => setOpenCategory(openCategory === key ? null : key)}
              >
                <span>{label}</span>
                <span className="filter-expand">{openCategory === key ? "−" : "+"}</span>
              </button>
              {openCategory === key && (
                <div className="filter-expand-box">{renderSubcategory(key)}</div>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="filter-reset-btn"
          onClick={() => {
            setSelectedPriceIdx(0);
            setSelectedFlavour("any");
            setSelectedWeight("any");
            setSelectedIngredient("any");
          }}
        >
          Reset Filters
        </button>
      </aside>

      <div className="product-grid">
        {filteredCakes.length === 0 ? (
          <div className="w-100 text-center py-5 text-muted">
            No products match your filters.
          </div>
        ) : (
          filteredCakes.map((cake, idx) => (
            <div
              key={cake.id}
              className="product-card"
              onMouseEnter={() => handleMouseEnter(idx, cake.images.length)}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`cart-icon${hoveredCard === idx ? " visible" : ""}`}>
                <img src="/images/cart.png" alt="cart" />
              </span>
              <img
                src={
                  hoveredCard === idx
                    ? cake.images[carouselIdx]
                    : cake.images[0]
                }
                alt={cake.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-title">{cake.name}</h3>
                <div className="price-row">
                  {cake.oldPrice && (
                    <span className="product-old-price">
                      ${cake.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="product-price">${cake.price.toFixed(2)}</span>
                </div>
                
                
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
