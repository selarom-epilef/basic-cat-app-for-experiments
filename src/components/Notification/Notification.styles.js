import styled from "styled-components";

export const Locator = styled.div`
  top: 4rem;
  right: 1rem;
  width: 20rem;
  position: fixed;
  z-index: 30000;

  transition: all 250ms ease-in-out;

  transform: translateX(150%);

  ${({ isDisplayed }) => (isDisplayed ? `transform: translateX(0%);` : null)}
`;
