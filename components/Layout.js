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
  }
`;
