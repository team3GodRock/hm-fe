import SideBar from '../../components/Sidebar';
import { PageBox, MainBox, HeaderWrapper, HorizontalDivider, ContainerBox } from '../../styles/globalstyles';
import useNav from '../../hooks/useNav';
import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import FormProfile from '../../components/FormProfile';
import { getPersonInfoById, getAllPersonList } from '../../api';


const ListPage = () => {
    const { navMenus, navSubMenus } = useNav();
    const location = useLocation();
    const [pageName, setPageName] = useState('');
    const [profileListData, setProfileListData] = useState([]);


    const fetchListData = async () => {
        try {
            const data = await getAllPersonList();
            const newData = data.filter((item) => 
                item.position === '대통령' || item.position === '도지사'
            );

            const profilePromises = newData.map((item) => getPersonInfoById(item.id));
            const profiles = await Promise.all(profilePromises);
            setProfileListData(profiles);
    
            console.log(profiles);
        } catch (error) {
            console.error('Error fetching list data:', error);
        }
    };
    

    const fetchDataCallback = useCallback(() => {
        fetchListData();
    }, []);

    useEffect(() => {
        fetchDataCallback();
    }
    // eslint-disable-next-line
    , []);

    useEffect(() => {
        if (location.pathname.includes('/govern')) {
            setPageName('도지사');
        } else if (location.pathname.includes('/president')) {
            setPageName('대통령');
        }
    }, [location.pathname]);

    return (
        <PageBox>
            <SideBar
            navMenus={navMenus}
            navSubMenus={navSubMenus}/>
            <MainBox>
                <HeaderWrapper>선거철 공약 - {pageName}</HeaderWrapper>
                <HorizontalDivider/>
                <ContainerBox>
                    {profileListData.map((profile, index) => (
                        <FormProfile key={index} contentArray={{ ...profile, index }} />
                    ))}
                </ContainerBox>
            </MainBox>
        </PageBox>
    );
}

export default ListPage;