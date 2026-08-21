import pakg1 from "./assets/packages1.webp";
import pakg2 from "./assets/packages2.webp";
import pakg3 from "./assets/packages3.webp";
import pakg4 from "./assets/packages4.webp";
import pakg5 from "./assets/packages5.webp";
import pakg6 from "./assets/packages6.webp";
import { FaBox } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export const tourpackages = [
  {
    name: "Thailand Temples & Beach Getaway",
    about:
      "Discover Thailand's vibrant temples, tropical beaches, and rich culture on a relaxing getaway filled with unforgettable experiences.",
    btn: "View Tour Detail",
    price: "$299",
    days: "4D/3N",
    pax: "7",
    image: pakg1,
  },
  {
    name: "Swiss Alps & Scenic Train Journey",
    about:
      "Travel through the breathtaking Swiss Alps, charming mountain towns, and spectacular landscapes aboard some of Europe's most scenic train routes.",
    btn: "View Tour Detail",
    price: "$199",
    days: "2D/4N",
    pax: "10",
    image: pakg2,
  },
  {
    name: "New York & Las Vegas City Escape",
    about:
      "Experience the energy of New York and the excitement of Las Vegas with iconic sights, vibrant streets, and unforgettable city experiences.",
    btn: "View Tour Detail",
    price: "$399",
    days: "7D/4N",
    pax: "12",
    image: pakg3,
  },
  {
    name: "Australia Wildlife & Reef Adventure",
    about:
      "Explore Australia's incredible wildlife, stunning coastlines, and the colorful wonders of the Great Barrier Reef on an adventure to remember.",
    btn: "View Tour Detail",
    price: "$499",
    days: "8D/2N",
    pax: "14",
    image: pakg4,
  },
  {
    name: "Iceland Northern Lights Discovery",
    about:
      "Chase the magical Northern Lights while exploring Iceland's dramatic landscapes, waterfalls, glaciers, and peaceful winter scenery.",
    btn: "View Tour Detail",
    price: "$599",
    days: "1D/2N",
    pax: "3",
    image: pakg5,
  },
  {
    name: "Egypt Pyramids & Nile Cruise Tour",
    about:
      "Step into ancient history with the legendary pyramids, magnificent temples, and a relaxing cruise along the timeless Nile River.",
    btn: "View Tour Detail",
    price: "$279",
    days: "9D/3N",
    pax: "13",
    image: pakg6,
  },
];

export const features = [
  {
    icon: FaBox,
    name: "Professional Tour Guide",
    about:
      "Travel with experienced local guides who bring every destination to life with valuable insights, stories, and practical knowledge.",
  },
  {
    icon: RiVerifiedBadgeFill,
    name: "Certified Travel Agency",
    about:
      "Book with confidence knowing your journey is planned with care, professionalism, and a commitment to a smooth travel experience.",
  },
  {
    icon: BiSupport,
    name: "24/7 Premium Support",
    about:
      "We're here whenever you need us, from planning your trip to getting the support you need while you're on the road.",
  },
];
