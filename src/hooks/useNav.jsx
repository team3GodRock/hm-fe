import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { navMenusState, navSubMenusState } from "../atoms/nav";
import styled from "styled-components";
import HomeIconPNG from "../assets/icons/HomeIcon.png";


// TODO : IconWrapper로 컴포넌트 분리
const HomeIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;


export default function useNav() {
  const [navMenus, setNavMenus] = useRecoilState(navMenusState);

  const [navSubMenus, setNavSubMenus] = useRecoilState(navSubMenusState);

  useEffect(() => {
    if (navMenus.length === 0) {
      setNavMenus([
        {
          title: "선거철 공약",
          icon: <HomeIcon src={HomeIconPNG} alt="home"/>,
          to: "/list",
        },
        {
          title: "정치인 프로필",
          icon: <HomeIcon src={HomeIconPNG} alt="home"/>,
          to: "/profile",
        },
      ]);
    }
  }, [navMenus, setNavMenus]);

  useEffect(() => {
    if (navSubMenus.length !== 0) return;
    let newNavSubMenus = [
      // 공약
      [
        { title: "대통령", to: "/president" },
        { title: "도지사", to: "/govern" },
      ],
      // 프로필
      [
        { title: "대통령", to: "/president" },
        { title: "도지사", to: "/map" },
      ],
    ];
    setNavSubMenus(newNavSubMenus);
  }, [navSubMenus.length, setNavSubMenus]);

  return { navMenus, navSubMenus };
};