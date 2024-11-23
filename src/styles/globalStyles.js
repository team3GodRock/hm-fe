import styled from "styled-components";

export const PageBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  width: 100%;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 44px;
  gap: 10px;
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

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background-color: #000000;
`;