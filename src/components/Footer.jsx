import {
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #2d2d2d;
  color: white;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 30px;
`;

const Logo = styled.h1`
  color: #573b8a;
  font-weight: 900;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    font-size: 34px;
  }
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    width: 45px;
    height: 45px;
  }

  ${mobile({ width: "30px", height: "30px" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 15px;
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Logo>PET Haven</Logo>
        </Link>
        <Desc>All copyrights reserved @aditya more</Desc>
        <SocialContainer>
          <a
            href="mailto:adityamore7860@gmail.com"
            target="blank"
{/*             rel="noreferrer" */}
          >
            <SocialIcon color="E4405F">
              <AiFillMail />
            </SocialIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-more-682233274"
            target="blank"
{/*             rel="noreferrer" */}
          >
            <SocialIcon color="3B5999">
              <AiFillLinkedin />
            </SocialIcon>
          </a>
          <a
            href="https://github.com/adityamore3/adityamore3"
            target="blank"
{/*             rel="noreferrer" */}
          >
            <SocialIcon color="000000">
              <AiFillGithub />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AiFillHome style={{ marginRight: "10px" }} /> Mumbai, Maharashtra
        </ContactItem>
        <ContactItem>
          <AiFillPhone style={{ marginRight: "10px" }} /> +91 9653154044
        </ContactItem>
        <ContactItem>
          <AiFillMail style={{ marginRight: "10px" }} /> aditymore7860@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
