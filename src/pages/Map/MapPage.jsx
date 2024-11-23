import { useState } from "react";
//import KoreaMap from "../assets/Map_of_South_Korea-blank.svg"; //SVG 파일 경로
import regionData from "../../assets/data/regiondata";
import './MapPage.css'; // css 파일
import SideBar from "../../components/Sidebar";
import { HeaderWrapper, MainBox, PageBox } from "../../styles/globalstyles";
import useNav from "../../hooks/useNav";

const MapPage = () => {
    const [selectedRegion, setSelectedRegion] = useState(null); //선택된 지역 상태
    const gyeonggiData = regionData.find(region => region.id === "gyeonggi"); //경기도 데이터 추출
    const gangwonData = regionData.find(region => region.id === "gangwon"); //강원도 데이터 추출
    const chungbukData = regionData.find(region => region.id === "chungbuk"); // 충북
    const chungnamData = regionData.find(region => region.id === "chungnam"); // 충남
    const gyeongbukData = regionData.find(region => region.id === "gyeongbuk"); // 경북
    const gyeongnamData = regionData.find(region => region.id === "gyeongnam"); // 경남
    const jeonbukData = regionData.find(region => region.id === "jeonbuk"); // 전북
    const jeonnamData = regionData.find(region => region.id === "jeonnam"); // 전남
    const jejuData = regionData.find(region => region.id === "jeju"); // 제주
    
    const { navMenus, navSubMenus } = useNav();
   
    return (
        <PageBox>
            <SideBar
            navMenus={navMenus}
            navSubMenus={navSubMenus}/>
            <MainBox>
                <HeaderWrapper>정치인 프로필 - 도지사</HeaderWrapper>
                <div className="container">
                <h1 className="title">대한민국 지도</h1>
                <p className="description">지역을 클릭하면 도지사 정보를 확인할 수 있습니다.</p>

                {/*지도 랜더링 */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 600"
                    className="interactive-map"
                    width= "100%"
                    height= "100%"
                    >
                    {/*경기도*/}
                    {gyeonggiData && (
                        <polyline
                        key = {gyeonggiData.id} //고유 키 설정
                        id = {gyeonggiData.id} // ID 설정
                        points = {gyeonggiData.path} // 경로 데이터
                        fill = "transparent" // 내부 색상을 투명으로 설정   
                        stroke="black" // 테두리 색상
                        strokeWidth="3" // 테두리 두께
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")} // 마우스 오버 시 빨간 테두리 
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")} // 마우스 아웃 시 원래 테두리
                        onClick = {() => setSelectedRegion(gyeonggiData.name)} // 클릭 시 경기도 선택
                        />
                    )}
                    {/*강원도*/}
                    {gangwonData && (
                        <polyline
                        key = {gangwonData.id}
                        id = {gangwonData.id}
                        points = {gangwonData.path}
                        fill = "transparent"
                        stroke = "black"
                        strokeWidth="3"
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")}
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                        onClick={() => setSelectedRegion(gangwonData.name)}
                        />
                    )}
                    {/*충청북도*/}
                    {chungbukData && (
                        <polyline
                        key = {chungbukData.id}
                        id = {chungbukData.id}
                        points = {chungbukData.path}
                        fill = "transparent"
                        stroke = "black"
                        strokeWidth="3"
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")}
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                        onClick={() => setSelectedRegion(chungbukData.name)}
                        />
                    )}
                    {/*충청남도*/}
                    {chungnamData && (
                        <polyline
                        key = {chungnamData.id}
                        id = {chungnamData.id}
                        points = {chungnamData.path}
                        fill = "transparent"
                        stroke = "black"
                        strokeWidth="3"
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")}
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                        onClick={() => setSelectedRegion(chungnamData.name)}
                        />
                    )}
                    {/*경상북도*/}
                    {gyeongbukData && (
                        <polyline
                        key = {gyeongbukData.id}
                        id = {gyeongbukData.id}
                        points = {gyeongbukData.path}
                        fill = "transparent"
                        stroke = "black"
                        strokeWidth="3"
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")}
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                        onClick={() => setSelectedRegion(gyeongbukData.name)}
                        />
                    )}
                    {/*경상남도*/}
                    {gyeongnamData && (
                        <polyline
                        key = {gyeongnamData.id}
                        id = {gyeongnamData.id}
                        points = {gyeongnamData.path}
                        fill = "transparent"
                        stroke = "black"
                        strokeWidth="3"
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")}
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                        onClick={() => setSelectedRegion(gyeongnamData.name)}
                        />
                    )}
                    {/*전라북도*/}
                    {jeonbukData && (
                        <polyline
                        key = {jeonbukData.id}
                        id = {jeonbukData.id}
                        points = {jeonbukData.path}
                        fill = "transparent"
                        stroke = "black"
                        strokeWidth="3"
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")}
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                        onClick={() => setSelectedRegion(jeonbukData.name)}
                        />
                    )}
                    {/*전라남도*/}
                    {jeonnamData && (
                        <polyline
                        key = {jeonnamData.id}
                        id = {jeonnamData.id}
                        points = {jeonnamData.path}
                        fill = "transparent"
                        stroke = "black"
                        strokeWidth="3"
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")}
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                        onClick={() => setSelectedRegion(jeonnamData.name)}
                        />
                    )}
                    {/*제주도*/}
                    {jejuData && (
                        <polyline
                        key = {jejuData.id}
                        id = {jejuData.id}
                        points = {jejuData.path}
                        fill = "transparent"
                        stroke = "black"
                        strokeWidth="3"
                        style={{pointerEvents: "visiblePainted"}}
                        onMouseEnter={(e) => (e.target.style.fill = "red")}
                        onMouseLeave={(e) => (e.target.style.fill = "transparent")}
                        onClick={() => setSelectedRegion(jejuData.name)}
                        />
                    )}
                    </svg>

                    {/*선택된 지역 정보 표시*/}
                    {selectedRegion && (
                        <div className= "region-info">
                            <h2>선택된 지역: {selectedRegion}</h2>
                            <p>선택된 지역과 관련된 정보를 여기서 확인하세요.</p>
                            </div>
                    )}
                </div>
            </MainBox>
        </PageBox>
    );
};

export default MapPage;