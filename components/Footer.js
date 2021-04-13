import styled from "styled-components";

export default function Layout() {
  return (
    <Footer>Made by Alexander Arvebratt © {new Date().getFullYear()}</Footer>
  );
}

const Footer = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 100;
  align-items: baseline;
  width: calc(100% - 20px);
  margin: 10px;
`;
