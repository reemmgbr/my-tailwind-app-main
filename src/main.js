import "./style.css";

import "font-awesome/css/font-awesome.css";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  modules: [Navigation, Pagination],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
    1320: {
      slidesPerView: 3,
    },
  },
  // pagination
  pagination: {
    el: ".swiper-pagination",
  },

});

document.querySelector("#app").innerHTML = `

 
`;
