import { MdSend } from "react-icons/md";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30vh;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #573b8a;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #6d44b8;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Desc>Get timely updates for our new products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MdSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
