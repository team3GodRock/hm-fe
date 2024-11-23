import SideBar from "../components/Sidebar";
import { MainBox, PageBox } from "../styles/globalstyles";
import useNav from "../hooks/useNav";

const NotFoundPage = () => {
    const { navMenus, navSubMenus } = useNav();

    return (
        <PageBox>
            <SideBar
            navMenus={navMenus}
            navSubMenus={navSubMenus}/>
            <MainBox>
                <div>
                <h1>404 - Not Found</h1>
                </div>
            </MainBox>
        </PageBox>
        
    );
}

export default NotFoundPage;