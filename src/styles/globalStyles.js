import styled from "styled-components";

export const PageBox = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 2rem;
`;

export const VerticalDivider = styled.div`
  height: 100%;
  width: 0.0625rem;
  background-color: #E4E7EC;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #E4E7EC;
`;