/*js */
/**
 * Products Data for MultiProductPage
 * Each product contains its own images, overview, and tabs.
 */

import donutMain1 from './assets/main.jpg';
import donutThumb1_2 from './assets/thumb1.jpg';
import donutThumb1_3 from './assets/thumb1.jpg';
import donutThumb1_4 from './assets/thumb1.jpg';
import donutThumb1_5 from './assets/thumb1.jpg';

import donutMain2 from './assets/main.jpg';
import donutThumb2_2 from './assets/thumb2.jpg';
import donutThumb2_3 from './assets/thumb2.jpg';
import donutThumb2_4 from './assets/thumb2.jpg';
import donutThumb2_5 from './assets/thumb2.jpg';

import donutMain3 from './assets/main.jpg';
import donutThumb3_2 from './assets/thumb3.jpg';
import donutThumb3_3 from './assets/thumb3.jpg';
import donutThumb3_4 from './assets/thumb3.jpg';
import donutThumb3_5 from './assets/thumb3.jpg';

import donutMain4 from './assets/main.jpg';
import donutThumb4_2 from './assets/thumb4.jpg';
import donutThumb4_3 from './assets/thumb4.jpg';
import donutThumb4_4 from './assets/thumb4.jpg';
import donutThumb4_5 from './assets/thumb4.jpg';

const productsData = [
  {
    id: 1,
    galleryImages: [donutMain1, donutThumb1_2, donutThumb1_3, donutThumb1_4, donutThumb1_5],
    productOverview: {
      title: "Sprinkled Donuts",
      rating: 3.5,
      ratingStars: "★ ★ ★ ★ ☆",
      price: 14.00,
      oldPrice: 18.00,
      description:
        "A pastel day with our freshly made donut—a soft, fluffy ring of golden-fried dough, dressed in a sweet glaze and playful sprinkles. Joy-bringer in your day.",
      stock: 3,
    },
    tabsData: [
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
            "Rainbow sprinkles",
          ],
        },
      },
      {
        label: "ADDITIONAL INFORMATION",
        content: {
          headline: "Fun & Festive",
          paragraphs: [
            "Eye-catching colors make this a party favorite.",
            "Child-friendly, ideal for celebrations.",
          ],
        },
      },
      {
        label: "SHIPPING & RETURN",
        content: {
          returns: {
            headline: "Returns Policy",
            text: "Donuts are perishable. Contact us within 24 hours for issues.",
          },
          shipping: {
            headline: "Shipping",
            text: "Ships fresh, packed with care. Delivered in 2-3 days.",
          },
        },
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
              text: "Colorful and tasty. Kids loved them!",
            },
            {
              avatarClass: "review-avatar avatar-2",
              stars: "★ ★ ★ ☆ ☆",
              rating: 3.5,
              author: "Jenny Willis",
              date: "07/06/2022",
              text: "Nice texture, fresh on arrival.",
            },
          ],
          reviewForm: {
            headline: "Add a review",
            rating: 3.5,
          },
        },
      },
    ],
  },
  {
    id: 2,
    galleryImages: [donutMain2, donutThumb2_2, donutThumb2_3, donutThumb2_4, donutThumb2_5],
    productOverview: {
      title: "Chocolate Glazed Donut",
      rating: 4.5,
      ratingStars: "★ ★ ★ ★ ★",
      price: 15.00,
      oldPrice: 19.00,
      description:
        "Indulgent chocolate glaze over a soft, airy donut—it’s a classic favorite for chocolate lovers.",
      stock: 7,
    },
    tabsData: [
      {
        label: "DESCRIPTION",
        content: {
          headline: "Chocolate Lover's Choice",
          paragraphs: [
            "Rich cocoa glaze tops our signature dough.",
            "Enjoyed best with milk or coffee.",
          ],
          list: [
            "Decadent chocolate",
            "Airy base",
            "Premium ingredients",
          ],
        },
      },
      {
        label: "ADDITIONAL INFORMATION",
        content: {
          headline: "Gourmet Experience",
          paragraphs: [
            "Made with Belgian chocolate.",
            "No artificial flavors.",
          ],
        },
      },
      {
        label: "SHIPPING & RETURN",
        content: {
          returns: {
            headline: "Returns Policy",
            text: "Issues must be reported within 24 hours. Contact support for help.",
          },
          shipping: {
            headline: "Shipping",
            text: "Express delivery in temperature-controlled package.",
          },
        },
      },
      {
        label: "REVIEWS",
        content: {
          reviews: [
            {
              avatarClass: "review-avatar",
              stars: "★ ★ ★ ★ ★",
              rating: 4.5,
              author: "James King",
              date: "07/07/2022",
              text: "Chocolate glaze is perfect—not too sweet.",
            },
            {
              avatarClass: "review-avatar avatar-2",
              stars: "★ ★ ★ ★ ☆",
              rating: 4.0,
              author: "Monica Ray",
              date: "07/09/2022",
              text: "Arrived fresh and delicious, will order again!",
            },
          ],
          reviewForm: {
            headline: "Add a review",
            rating: 4.5,
          },
        },
      },
    ],
  },
  {
    id: 3,
    galleryImages: [donutMain3, donutThumb3_2, donutThumb3_3, donutThumb3_4, donutThumb3_5],
    productOverview: {
      title: "Strawberry Frosted Donut",
      rating: 4.0,
      ratingStars: "★ ★ ★ ★ ☆",
      price: 13.50,
      oldPrice: 17.00,
      description:
        "Refreshing strawberry frosting brings a fruity punch to this classic donut. Topped with pink icing.",
      stock: 5,
    },
    tabsData: [
      {
        label: "DESCRIPTION",
        content: {
          headline: "Berrylicious!",
          paragraphs: [
            "Made with real strawberry puree.",
            "Tart-sweet flavor, pretty pink finish.",
          ],
          list: [
            "No food dye",
            "Naturally flavored",
            "Soft and moist",
          ],
        },
      },
      {
        label: "ADDITIONAL INFORMATION",
        content: {
          headline: "Spring Seasonal",
          paragraphs: [
            "Limited edition. Available March–May.",
            "Pairs well with herbal tea.",
          ],
        },
      },
      {
        label: "SHIPPING & RETURN",
        content: {
          returns: {
            headline: "Returns Policy",
            text: "Contact us for refunds or replacement if not satisfied.",
          },
          shipping: {
            headline: "Shipping",
            text: "Ships cold-packed for freshness.",
          },
        },
      },
      {
        label: "REVIEWS",
        content: {
          reviews: [
            {
              avatarClass: "review-avatar",
              stars: "★ ★ ★ ☆ ☆",
              rating: 3.5,
              author: "Sara Kim",
              date: "07/10/2022",
              text: "Nice natural strawberry taste!",
            },
            {
              avatarClass: "review-avatar avatar-2",
              stars: "★ ★ ★ ★ ☆",
              rating: 4.0,
              author: "Leo Grant",
              date: "07/12/2022",
              text: "Loved the pink icing.",
            },
          ],
          reviewForm: {
            headline: "Add a review",
            rating: 4.0,
          },
        },
      },
    ],
  },
  {
    id: 4,
    galleryImages: [donutMain4, donutThumb4_2, donutThumb4_3, donutThumb4_4, donutThumb4_5],
    productOverview: {
      title: "Caramel Pecan Donut",
      rating: 4.2,
      ratingStars: "★ ★ ★ ★ ☆",
      price: 16.00,
      oldPrice: 20.00,
      description:
        "Caramel glaze and toasted pecans bring a sweet-nutty delight to this pillowy donut.",
      stock: 2,
    },
    tabsData: [
      {
        label: "DESCRIPTION",
        content: {
          headline: "Nutty & Sweet",
          paragraphs: [
            "Slow-cooked caramel with premium Georgia pecans.",
            "Nutty crunch meets soft dough.",
          ],
          list: [
            "Toasted pecans on top",
            "Rich caramel glaze",
            "Allergens: contains nuts",
          ],
        },
      },
      {
        label: "ADDITIONAL INFORMATION",
        content: {
          headline: "Premium Ingredients",
          paragraphs: [
            "Sourced from local farms.",
            "No preservatives.",
          ],
        },
      },
      {
        label: "SHIPPING & RETURN",
        content: {
          returns: {
            headline: "Returns Policy",
            text: "Perishables must be reported same-day for refunds.",
          },
          shipping: {
            headline: "Shipping",
            text: "Shipped insulated for quality.",
          },
        },
      },
      {
        label: "REVIEWS",
        content: {
          reviews: [
            {
              avatarClass: "review-avatar",
              stars: "★ ★ ★ ★ ☆",
              rating: 4.0,
              author: "Bill Dane",
              date: "07/15/2022",
              text: "Caramel & pecans—amazing combo.",
            },
            {
              avatarClass: "review-avatar avatar-2",
              stars: "★ ★ ★ ★ ★",
              rating: 5.0,
              author: "Alice Tan",
              date: "07/16/2022",
              text: "Nutty crunch with creamy caramel, super tasty.",
            },
          ],
          reviewForm: {
            headline: "Add a review",
            rating: 4.2,
          },
        },
      },
    ],
  }
];

export default productsData;
