import SideBar from '../../components/Sidebar';
import { PageBox, MainBox, HeaderWrapper, HorizontalDivider, ContainerBox } from '../../styles/globalstyles';
import useNav from '../../hooks/useNav';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FormProfile from '../../components/FormProfile';

const ListPage = () => {
    const { navMenus, navSubMenus } = useNav();
    const location = useLocation();
    const [name, setName] = useState('');

    const dummyData = {
        candidate: "1",
        profileName: "유재석",
        partyName: "집에가고싶당",
        supportingPercentage: 50,
        imgSrc: "https://i.namu.wiki/i/mWLCLSO9VC-_L1C780b2XvYOlXGesQL3NrtsHWm2xVW1paaLWVv8DrDWd3R5iwwjWY-MapZ1rICP2-2mTwiy968UN4tOh9d2S035HaZn__4ZlXYW14-Adjz4vBF9EpfxrmYkqZ_NH_lazX1o-JpJWg.webp",
        headerText: "headerText",
        contentArray: ["안녕하세요 저는 이곤우입니다. 반갑습니다", "안녕하세요 저는 이곤우입니다. 반갑습니다", "안녕하세요 저는 이곤우입니다. 반갑습니다"]
    };

    useEffect(() => {
        if (location.pathname.includes('/govern')) {
            setName('도지사');
        } else if (location.pathname.includes('/president')) {
            setName('대통령');
        }
    }, [location.pathname]);

    return (
        <PageBox>
            <SideBar
            navMenus={navMenus}
            navSubMenus={navSubMenus}/>
            <MainBox>
                <HeaderWrapper>선거철 공약 - {name}</HeaderWrapper>
                <HorizontalDivider/>
                <ContainerBox>
                    <FormProfile contentArray={dummyData}/>
                    <FormProfile contentArray={dummyData}/>
                    <FormProfile contentArray={dummyData}/>
                    <FormProfile contentArray={dummyData}/>
                    <FormProfile contentArray={dummyData}/>
                    <FormProfile contentArray={dummyData}/>
                    <FormProfile contentArray={dummyData}/>
                    <FormProfile contentArray={dummyData}/>
                    <FormProfile contentArray={dummyData}/>

                </ContainerBox>
            </MainBox>
        </PageBox>
    );
}

export default ListPage;