import SideBar from '../../components/Sidebar';
import useNav from '../../hooks/useNav';
import styled from 'styled-components';
import { ContainerBox, MainBox, PageBox, HeaderWrapper, HorizontalDivider, ImageWrapper, VerticalDivider } from '../../styles/globalstyles';
import FormEmployment from '../../components/FormEmployment.jsx';
import FormResume from '../../components/FormResume.jsx';
import FormPercentage from '../../components/FormPercentage.jsx';

const HeadProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 0 20px;
    width: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 15px 10px;
    align-items: center;
    width: 100%;
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px 48px;
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
    height: 100%;
`;

const FormContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
`;

const ProportionContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
`;

const PromiseContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 32px;
    font-weight: 600;
    justify-content: flex-start;
    align-items: center;
`;

const PromiseListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

const FormListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`;

const ProfilePage = () => {
    const { navMenus, navSubMenus } = useNav();

    const dummyData = "loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum ";
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
                            <TextName>유재석</TextName>
                        </NameContainer>
                        <ResumeContainer>
                            { /* 이력, 경력 받을만큼 받기, 최대 8개까지, 수기로 X */}
                            <FormContainer>
                                { /*<FormResume ContentText="Loren Ipsum Loren Ipsum Loren Ipsum"/> */}
                            </FormContainer>
                            <FormContainer>
                                {/* FormResume 컴포넌트 사용 */}
                            </FormContainer>
                        </ResumeContainer>
                    </TextContainer>
                </HeadProfile>
                <HorizontalDivider />
                <ProportionContainer>
                    <FormPercentage text="지지율" percentage={50}/>
                    <FormPercentage text="공약 달성도" percentage={50}/>
                </ProportionContainer>
                <PromiseContainer>
                    공약
                    <PromiseListWrapper>
                        <FormListContainer>
                            <FormEmployment HeaderText="공약1" ContentText={dummyData} isSucceed={true}/>
                            <FormEmployment HeaderText="공약2" ContentText={dummyData} isSucceed={true}/>
                            <FormEmployment HeaderText="공약3" ContentText={dummyData} isSucceed={true}/>
                            <FormEmployment HeaderText="공약4" ContentText={dummyData} isSucceed={true}/>
                        </FormListContainer>
                        <VerticalDivider />
                        <FormListContainer>
                            <FormEmployment HeaderText="공약5" ContentText={dummyData} isSucceed={false}/>
                            <FormEmployment HeaderText="공약6" ContentText={dummyData} isSucceed={false}/>
                            <FormEmployment HeaderText="공약7" ContentText={dummyData} isSucceed={false}/>
                            <FormEmployment HeaderText="공약8" ContentText={dummyData} isSucceed={false}/>
                        </FormListContainer>
                    </PromiseListWrapper>
                </PromiseContainer>
            </ContainerBox>
        </MainBox>
    </PageBox>
    );
};

export default ProfilePage;
