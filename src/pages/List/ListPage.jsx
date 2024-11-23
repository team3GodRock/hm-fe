import SideBar from '../../components/Sidebar';
import { PageBox, MainBox } from '../../styles/globalstyles';
import useNav from '../../hooks/useNav';

const ListPage = () => {
    const { navMenus, navSubMenus } = useNav();

    return (
        <PageBox>
            <SideBar
            navMenus={navMenus}
            navSubMenus={navSubMenus}/>
            <MainBox>
                <div>리스트 페이지</div>
            </MainBox>
        </PageBox>
    );
}

export default ListPage;