import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/TwDf0p8/login-bg.jpg");
`;

const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-right: 40px; /* Add space for the toggle icon */
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ToggleVisibility = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #573b8a;
  font-size: 12px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #573b8a;
  color: white;
  font-weight: 800;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: #6d44b8;
  }

  &:disabled {
    background-color: #9c9c9c;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate account creation process
    setTimeout(() => {
      setLoading(false);
      alert("Account created successfully!");
    }, 2000);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <MainContainer>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <Input
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </InputContainer>
            <InputContainer>
              <Input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <ToggleVisibility onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? "Hide" : "Show"}
              </ToggleVisibility>
            </InputContainer>
            <InputContainer>
              <Input
                name="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <ToggleVisibility onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                {confirmPasswordVisible ? "Hide" : "Show"}
              </ToggleVisibility>
            </InputContainer>
            {error && <Error>{error}</Error>}
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button disabled={loading}>
              {loading ? "CREATING..." : "CREATE"}
            </Button>
          </Form>
        </Wrapper>
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Register;
