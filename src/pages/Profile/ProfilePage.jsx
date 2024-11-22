import SideBar from '../../components/Sidebar';
import './ProfilePage.css';
import useNav from '../../hooks/useNav';
import styled from 'styled-components';
import { ContainerBox, MainBox, PageBox, HeaderWrapper, HorizontalDivider, ImageWrapper } from '../../styles/globalstyles';


const HeadProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 0 20px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 15px 10px;
    align-items: center;
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 48px 16px;
`;

const TextPosition = styled.div`
    display: flex;
    font-size: 36px;
    color: #3E6AF2;
`;

const TextName = styled.div`
    display: flex;
    font-size: 64px;
    font-weight: 600;
`;

const ResumeContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 20px;
`;

const FormContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
`;

const FormResume = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;


const ProfilePage = () => {
    const { navMenus, navSubMenus } = useNav();

    return (
    <PageBox>
        <SideBar
        navMenus={navMenus}
        navSubMenus={navSubMenus}/>
        <MainBox>
            <HeaderWrapper>정치인 프로필 - 대통령</HeaderWrapper>
            <HorizontalDivider />
            <ContainerBox>
                <HeadProfile>
                    <ImageWrapper src="https://i.namu.wiki/i/mWLCLSO9VC-_L1C780b2XvYOlXGesQL3NrtsHWm2xVW1paaLWVv8DrDWd3R5iwwjWY-MapZ1rICP2-2mTwiy968UN4tOh9d2S035HaZn__4ZlXYW14-Adjz4vBF9EpfxrmYkqZ_NH_lazX1o-JpJWg.webp" alt="대통령 이미지" />
                    <TextContainer>
                        <NameContainer>
                            <TextPosition>대통령</TextPosition>
                            <TextName>문재인</TextName>
                        </NameContainer>
                        <ResumeContainer>
                            { /* 이력, 경력 받을만큼 받기, 최대 8개까지, 수기로 X */}
                            <FormContainer>
                                <FormResume> 안녕하세요 </FormResume>
                                <FormResume> 안녕하세요 </FormResume>
                                <FormResume> 안녕하세요 </FormResume>
                                <FormResume> 안녕하세요 </FormResume>
                            </FormContainer>
                            <FormContainer>
                                <FormResume> 안녕하세요 </FormResume>
                                <FormResume> 안녕하세요 </FormResume>
                                <FormResume> 안녕하세요 </FormResume>
                                <FormResume> 안녕하세요 </FormResume>
                            </FormContainer>
                        </ResumeContainer>
                    </TextContainer>
                </HeadProfile>
                <HorizontalDivider />

            </ContainerBox>
        </MainBox>
    </PageBox>
    );
};

export default ProfilePage;
