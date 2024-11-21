import SideBar from '../../components/Sidebar';
import './ProfilePage.css';
import useNav from '../../hooks/useNav';


const ProfilePage = () => {
    const { navMenus, navSubMenus } = useNav();

    return (
    <>
        <SideBar
        navMenus={navMenus}
        navSubMenus={navSubMenus}
        title='정치인'/>
        <div className="profile-container">
            <h1>Profile Page</h1>
        </div>
    </>
    );
};

export default ProfilePage;
