import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import brandIcon from '../assets/brandIcon.png';
import ChevronDownIcon from '../assets/icons/ChevronDownIcon.png';
import ChevronUpIcon from '../assets/icons/ChevronUpIcon.png';
import { VerticalDivider } from '../styles/globalstyles';

const SidebarLayout = styled.div`
  height: 100vh;
  min-width: 18rem;
  max-width: 18rem;
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2rem;
`;

const NavHeaderBox = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #344054;
`;

const NavHeaderImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const NavHeaderText = styled.span`
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 600;
  color: #344054;
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #344054;
`;

const NavMenuCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background-color: ${({ $focused }) => ($focused ? '#E0E0E0' : 'transparent')};
  border-radius: ${({ $focused }) => ($focused ? '0.375rem' : '0')};
  cursor: pointer;
`;

const NavMenuContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const NavMenuContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
`;

const NavItemContentText = styled.span``;

const NavMenuActions = styled.div``;

const NavSubMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '0.5rem' : '0')};
  max-height: ${({ $isOpen, $maxHeight }) => ($isOpen ? `${$maxHeight}px` : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

const NavMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem 0.5rem 3rem;
  background-color: ${({ $focused }) => ($focused ? '#E0E0E0' : 'transparent')};
  border-radius: ${({ $focused }) => ($focused ? '0.375rem' : '0')};
  cursor: pointer;
`;


const SideBar = ({
    navMenus,
    navSubMenus,
  }) => {
    const [selectedNav, setSelectedNav] = useState(0);
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isMenuOpened, setIsMenuOpened] = useState(true);
    const [navMenuWrapperHeight, setNavMenuWrapperHeight] = useState(0);
  
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const navMenuWrapperRef = useRef();
  
    // Get Nav menu Height
    useLayoutEffect(() => {
      if (navMenuWrapperRef.current)
        setNavMenuWrapperHeight(navMenuWrapperRef.current.scrollHeight);
    }, [selectedNav, isMenuOpened]);
  
    // Update SideBar
    useEffect(() => {
      const _updateSideBar = () => {
        let newSelectedNav = 0;
        let newSelectedMenu = 0;
    
        navMenus.forEach((item, index) => {
          if (pathname.startsWith(item.to)) {
            newSelectedNav = index;
    
            const currentNavMenu = navSubMenus[index];
            if (currentNavMenu.length > 0) {
              currentNavMenu.forEach((menuItem, menuIndex) => {
                if (pathname.startsWith(item.to + menuItem.to)) {
                  newSelectedMenu = menuIndex;
                }
              });
            }
          }
        });
    
        setSelectedNav(newSelectedNav);
        setSelectedMenu(newSelectedMenu);
        setIsMenuOpened(true);
      };
    
      _updateSideBar();
    }, [navMenus, navSubMenus, pathname]);
    
    const _navItemActionsBuilder = (index) => {
      if (navSubMenus[index].length === 0) return null;
    
      return selectedNav === index && isMenuOpened ? (
        <img src={ChevronUpIcon} alt="Chevron Up" style={{ width: '1.5rem', height: '1.5rem' }} />
      ) : (
        <img src={ChevronDownIcon} alt="Chevron Down" style={{ width: '1.5rem', height: '1.5rem' }} />
      );
    };
    
  
    const _navSubMenuBuilder = (index) => {
      if (navSubMenus[index].length == 0) return null;
      if (selectedNav == index)
        return (
          <NavSubMenuBox
            ref={navMenuWrapperRef}
            $isOpen={isMenuOpened}
            $maxHeight={navMenuWrapperHeight}
          >
            {navSubMenus[index].map((menuItem, menuIndex) => {
              return (
                <NavMenuItem
                  key={menuIndex}
                  onClick={() => handleClickMenu(menuIndex)}
                  $focused={selectedMenu == menuIndex}
                >
                  {menuItem.title}
                </NavMenuItem>
              );
            })}
          </NavSubMenuBox>
        );
    };
  
    const handleClick = (index) => {
      if (selectedNav === index) {
        setIsMenuOpened((prev) => !prev);
      } else {
        setSelectedNav(index);
        setIsMenuOpened(true);
        navigateTo(index, 0);
      }
    };
  
    const handleClickMenu = (index) => {
      if (selectedMenu != index) navigateTo(selectedNav, index);
    };
  
    const navigateTo = (nav, menu) => {
      let navigateURL = navMenus[nav].to;
      if (navSubMenus[nav][menu] && navSubMenus[nav][menu].title)
        navigateURL += navSubMenus[nav][menu].to;
      navigate(navigateURL);
    };
  
    return (
      <SidebarLayout>
        <ContentWrapper>
          <NavSection>
            <NavHeaderBox>
              <NavHeaderImg src={brandIcon}></NavHeaderImg>
              <NavHeaderText>정치人</NavHeaderText>
            </NavHeaderBox>
            <NavBox>
              {navMenus.map((item, index) => {
                return (
                  <NavMenuCol key={index}>
                    <NavMenuBox
                      $focused={selectedNav == index}
                      onClick={() => handleClick(index)}
                    >
                      <NavMenuContentBox>
                        <NavMenuContentIcon>{item.icon}</NavMenuContentIcon>
                        <NavItemContentText>{item.title}</NavItemContentText>
                      </NavMenuContentBox>
                      <NavMenuActions>
                        {_navItemActionsBuilder(index)}
                      </NavMenuActions>
                    </NavMenuBox>
                    {_navSubMenuBuilder(index)}
                  </NavMenuCol>
                );
              })}
            </NavBox>
          </NavSection>
        </ContentWrapper>
        <VerticalDivider />
      </SidebarLayout>
    );
  };
  
  SideBar.propTypes = {
    navMenus: PropTypes.array.isRequired,
    navSubMenus: PropTypes.array.isRequired,
  };

export default SideBar;
