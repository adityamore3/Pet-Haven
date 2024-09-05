import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Heading = styled.h1`
  height: 50px;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Heading>TOP CATEGORIES</Heading>
      <Categories />
      <Heading>TOP PRODUCTS</Heading>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
