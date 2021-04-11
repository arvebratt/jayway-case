import styled from "styled-components";

export default function Title() {
  return (
    <StyledContainer>
      <StyledTitle>Pokémon search engine</StyledTitle>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
   {
    background-color: #b85b5a;
    border-bottom: 5px solid #333333;
    border-top: 5px solid #b85b5a;
    margin: 0px;
    width: 100%;
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  color: #333333;
`;
