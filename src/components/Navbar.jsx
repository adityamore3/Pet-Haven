import { PiShoppingCartBold } from "react-icons/pi";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Badge = styled.p`
  position: absolute;
  border-radius: 50%;
  background-color: #ff243a;
  color: white;
  width: 15px;
  height: 15px;
  font: 800 0.6rem "Urbanist";
  display: grid;
  place-items: center;
  transform: translate(90%, -200%);
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Logo>Pet Haven</Logo>
          </Link>
        </Left>

        <Right>
          <Link
            to="/register"
            style={{ color: "white", textDecoration: "none" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <PiShoppingCartBold
                style={{ color: "white", fontSize: "1.3rem" }}
              />
              <Badge>1</Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
