import { useEffect, useState } from "react";
import styled from "styled-components";
import regionData from "../../assets/data/regiondata";
import SideBar from "../../components/Sidebar";
import { ContainerBox, HeaderWrapper, HorizontalDivider, MainBox, PageBox } from "../../styles/globalstyles";
import useNav from "../../hooks/useNav";
import { useNavigate } from "react-router-dom";

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InteractiveMap = styled.svg`
  width: 100%;
  max-width: 800px;
  height: auto;
  overflow: visible; /* SVG가 잘리지 않게 설정 */
`;

const MapPage = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const Navigate = useNavigate();
  const gyeonggiData = regionData.find(region => region.id === "gyeonggi");
  const gangwonData = regionData.find(region => region.id === "gangwon");
  const chungbukData = regionData.find(region => region.id === "chungbuk");
  const chungnamData = regionData.find(region => region.id === "chungnam");
  const gyeongbukData = regionData.find(region => region.id === "gyeongbuk");
  const gyeongnamData = regionData.find(region => region.id === "gyeongnam");
  const jeonbukData = regionData.find(region => region.id === "jeonbuk");
  const jeonnamData = regionData.find(region => region.id === "jeonnam");
  const jejuData = regionData.find(region => region.id === "jeju");

  const { navMenus, navSubMenus } = useNav();

  useEffect(() => {
    if (selectedRegion) {
      Navigate(`/profile/govern/${selectedRegion}`);
    }
  }, [selectedRegion, Navigate]);

  return (
    <PageBox>
      <SideBar navMenus={navMenus} navSubMenus={navSubMenus} />
      <MainBox>
        <HeaderWrapper>정치인 프로필 - 도지사</HeaderWrapper>
        <HorizontalDivider />
        <ContainerBox>
          <MapContainer>    
          <InteractiveMap
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-250 -150 1500 1200"
            >

              {/* 경기도 */}
              {gyeonggiData && (
                <polyline
                  key={gyeonggiData.id}
                  id={gyeonggiData.id}
                  points={gyeonggiData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(gyeonggiData.name)}
                />
              )}
              {/* 강원도 */}
              {gangwonData && (
                <polyline
                  key={gangwonData.id}
                  id={gangwonData.id}
                  points={gangwonData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(gangwonData.name)}
                />
              )}
              {/* 충청북도 */}
              {chungbukData && (
                <polyline
                  key={chungbukData.id}
                  id={chungbukData.id}
                  points={chungbukData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(chungbukData.name)}
                />
              )}
              {/* 충청남도 */}
              {chungnamData && (
                <polyline
                  key={chungnamData.id}
                  id={chungnamData.id}
                  points={chungnamData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(chungnamData.name)}
                />
              )}
              {/* 경상북도 */}
              {gyeongbukData && (
                <polyline
                  key={gyeongbukData.id}
                  id={gyeongbukData.id}
                  points={gyeongbukData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(gyeongbukData.name)}
                />
              )}
              {/* 경상남도 */}
              {gyeongnamData && (
                <polyline
                  key={gyeongnamData.id}
                  id={gyeongnamData.id}
                  points={gyeongnamData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(gyeongnamData.name)}
                />
              )}
              {/* 전라북도 */}
              {jeonbukData && (
                <polyline
                  key={jeonbukData.id}
                  id={jeonbukData.id}
                  points={jeonbukData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(jeonbukData.name)}
                />
              )}
              {/* 전라남도 */}
              {jeonnamData && (
                <polyline
                  key={jeonnamData.id}
                  id={jeonnamData.id}
                  points={jeonnamData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(jeonnamData.name)}
                />
              )}
              {/* 제주도 */}
              {jejuData && (
                <polyline
                  key={jejuData.id}
                  id={jejuData.id}
                  points={jejuData.path}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"
                  style={{ pointerEvents: "visiblePainted" }}
                  onMouseEnter={(e) => (e.target.style.fill = "red")}
                  onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                  onClick={() => setSelectedRegion(jejuData.name)}
                />
              )}
            </InteractiveMap>
          </MapContainer>
        </ContainerBox>
      </MainBox>
    </PageBox>
  );
};

export default MapPage;
