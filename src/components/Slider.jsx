import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "60vh" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({ flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Image = styled.img`
  max-height: 80%;
  max-width: 90%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({ padding: "20px", textAlign: "center" })}
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  ${mobile({ fontSize: "36px" })}
`;

const Desc = styled.p`
  margin: 40px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 1.5;
  ${mobile({ fontSize: "16px", margin: "20px 0" })}
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(135deg, #573b8a, #6d44b8);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #6d44b8, #573b8a);
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    setSlideIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + sliderItems.length) % sliderItems.length
        : (prevIndex + 1) % sliderItems.length
    );
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <MdOutlineArrowLeft size={28} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <MdOutlineArrowRight size={28} />
      </Arrow>
    </Container>
  );
};

export default Slider;
