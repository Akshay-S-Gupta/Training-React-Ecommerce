const tabsData = [
  {
    label: "DESCRIPTION",
    content: {
      headline: "Product Description",
      paragraphs: [
        "Classic donut with sprinkles—fluffy, sweet, and delicious.",
        "Perfect for every mood. Soft center with crunchy toppings."
      ],
      list: [
        "Golden-fried dough",
        "Sweet vanilla glaze",
        "Rainbow sprinkles"
      ]
    }
  },
  {
    label: "ADDITIONAL INFORMATION",
    content: {
      headline: "Fun & Festive",
      paragraphs: [
        "Eye-catching colors make this a party favorite.",
        "Child-friendly, ideal for celebrations."
      ]
    }
  },
  {
    label: "SHIPPING & RETURN",
    content: {
      returns: {
        headline: "Returns Policy",
        text: "Donuts are perishable. Contact us within 24 hours for issues."
      },
      shipping: {
        headline: "Shipping",
        text: "Ships fresh, packed with care. Delivered in 2-3 days."
      }
    }
  },
  {
    label: "REVIEWS",
    content: {
      reviews: [
        {
          avatarClass: "review-avatar",
          stars: "★ ★ ★ ☆ ☆",
          rating: 3.5,
          author: "Tom Johnson",
          date: "07/05/2022",
          text: "Colorful and tasty. Kids loved them!"
        },
        {
          avatarClass: "review-avatar avatar-2",
          stars: "★ ★ ★ ☆ ☆",
          rating: 3.5,
          author: "Jenny Willis",
          date: "07/06/2022",
          text: "Nice texture, fresh on arrival."
        }
      ],
      reviewForm: {
        headline: "Add a review",
        rating: 3.5
      }
    }
  }
];
 
export const cakes = [
  {
    id: 1,
    name: "Midnight Chocolate Fudge",
    oldPrice: 25.00,
    price: 20.00,
    images: ["/images/cake1.jpg", "/images/cake2.jpg", "/images/cake3.jpg"],
    weight: ["500gm"],
    flavour: "chocolate",
    ingredient: "egg",
    rating: 3.5,
    ratingStars: "★ ★ ★ ★ ☆",
    description: "A pastel day with our freshly made donut—a soft, fluffy ring of golden-fried dough, dressed in a sweet glaze and playful sprinkles. Joy-bringer in your day.",
    stock: 3,
    tabsData
  },
  {
    id: 2,
    name: "Velvet Ruby Classic",
    oldPrice: 40.00,
    price: 28.00,
    images: ["/images/cake2.jpg", "/images/cake3.jpg", "/images/cake1.jpg"],
    weight: ["1kg"],
    flavour: "vanilla",
    ingredient: "eggless",
    rating: 4.5,
    ratingStars: "★ ★ ★ ★ ★",
    description: "Indulgent chocolate glaze over a soft, airy donut—it’s a classic favorite for chocolate lovers.",
    stock: 7,
    tabsData
  },
  {
    id: 3,
    name: "Golden Vanilla Dream",
    oldPrice: 30.00,
    price: 22.00,
    images: ["/images/cake3.jpg", "/images/cake2.jpg", "/images/cake1.jpg"],
    weight: ["2kg"],
    flavour: "vanilla",
    ingredient: "egg",
    rating: 4.0,
    ratingStars: "★ ★ ★ ★ ☆",
    description: "Refreshing strawberry frosting brings a fruity punch to this classic donut. Topped with pink icing.",
    stock: 5,
    tabsData
  },
  {
    id: 4,
    name: "Strawberry Sunburst",
    oldPrice: 38.00,
    price: 27.00,
    images: ["/images/cake4.jpg", "/images/cake2.jpg", "/images/cake3.jpg"],
    weight: ["500gm"],
    flavour: "strawberry",
    ingredient: "egg",
    rating: 4.2,
    ratingStars: "★ ★ ★ ★ ☆",
    description: "Caramel glaze and toasted pecans bring a sweet-nutty delight to this pillowy donut.",
    stock: 2,
    tabsData
  },
  {
    id: 5,
    name: "Zesty Lemon Frizz",
    oldPrice: 40.00,
    price: 24.00,
    images: ["/images/cake3.jpg", "/images/cake2.jpg", "/images/cake4.jpg"],
    weight: ["1kg"],
    flavour: "lemon",
    ingredient: "eggless",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 6,
    name: "Golden Caramel Crunch",
    oldPrice: 35.00,
    price: 29.00,
    images: ["/images/cake4.jpg", "/images/cake3.jpg", "/images/cake2.jpg"],
    weight: ["150gm", "500gm"],
    flavour: "caramel",
    ingredient: "egg",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 7,
    name: "Caramel Deluxe",
    oldPrice: 38.00,
    price: 29.00,
    images: ["/images/cake1.jpg", "/images/cake2.jpg", "/images/cake3.jpg"],
    weight: ["2kg"],
    flavour: "caramel",
    ingredient: "eggless",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 8,
    name: "Toffee Twist Caramel",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake3.jpg", "/images/cake2.jpg", "/images/cake4.jpg"],
    weight: ["150gm"],
    flavour: "caramel",
    ingredient: "egg",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 9,
    name: "Mocha Caramel Crown",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake2.jpg", "/images/cake3.jpg", "/images/cake1.jpg"],
    weight: ["500gm", "1kg"],
    flavour: "caramel",
    ingredient: "eggless",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 10,
    name: "Crispy Caramel Ecstasy",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake2.jpg", "/images/cake3.jpg", "/images/cake4.jpg"],
    weight: ["1kg"],
    flavour: "caramel",
    ingredient: "egg",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 11,
    name: "Salted Caramel Magic",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake3.jpg", "/images/cake1.jpg", "/images/cake2.jpg"],
    weight: ["500gm"],
    flavour: "caramel",
    ingredient: "eggless",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 12,
    name: "Caramel Berry Crave",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake3.jpg", "/images/cake4.jpg", "/images/cake2.jpg"],
    weight: ["2kg"],
    flavour: "caramel",
    ingredient: "egg",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 13,
    name: "Caramel Feast Supreme",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake1.jpg", "/images/cake2.jpg", "/images/cake3.jpg"],
    weight: ["500gm", "2kg"],
    flavour: "caramel",
    ingredient: "eggless",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 14,
    name: "Caramel Velvet Wonder",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake2.jpg", "/images/cake4.jpg", "/images/cake3.jpg"],
    weight: ["1kg"],
    flavour: "caramel",
    ingredient: "egg",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 15,
    name: "Caramel Carnival",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake3.jpg", "/images/cake4.jpg", "/images/cake1.jpg"],
    weight: ["150gm", "1kg"],
    flavour: "caramel",
    ingredient: "eggless",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  },
  {
    id: 16,
    name: "Caramel Frost Fantasy",
    oldPrice: 36.00,
    price: 29.00,
    images: ["/images/cake4.jpg", "/images/cake2.jpg", "/images/cake3.jpg"],
    weight: ["2kg"],
    flavour: "caramel",
    ingredient: "egg",
    rating: 0,
    ratingStars: "★ ★ ★ ★ ★",
    description: "",
    stock: 0,
    tabsData
  }
];
