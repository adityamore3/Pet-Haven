import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  margin: 5px;
  height: 30vh;
  position: relative;
`;

const Image = styled.img`
  height: 100%;

  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: #573b8a;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: 0ms.2s ease;

  &:hover {
    padding: 11px;
    font-weight: 700;
    background-color: #6d44b8;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
