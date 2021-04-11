import styled from "styled-components";
import Search from "./Search";
import Display from "./Display";
import Meta from "./Meta";
import Title from "./Title";
import UnderTitle from "./UnderTitle";

export default function Layout() {
  return (
    <>
      <Meta />
      <StyledWrapper>
        <Title />
        <UnderTitle />
        <Search />
        <Display />
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
   {
    position: absolute;
    min-height: 100vh;
    width: 100vw;
    position: relative;
    background-color: #f1f3f6;
  }
`;
