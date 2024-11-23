import styled from "styled-components";

export const PageBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  max-width: 100vw;
  height: 100%;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 44px;
  gap: 10px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
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

export const HeaderWrapper = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
  display: flex;
  font-size: 40px;
  font-weight: 600;
  padding: 36px 44px;
`;

export const ImageWrapper = styled.img`
  display: flex;
  width: 210px;
  height: 240px;
`;

export const IconWrapper = styled.img`
  width: 20px;
  height: 20px;
  background-color: #000000;
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #000000;
`;