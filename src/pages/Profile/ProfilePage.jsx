import SideBar from '../../components/Sidebar';
import useNav from '../../hooks/useNav';
import styled from 'styled-components';
import { ContainerBox, MainBox, PageBox, HeaderWrapper, HorizontalDivider, ImageWrapper, VerticalDivider } from '../../styles/globalstyles';
import FormEmployment from '../../components/FormEmployment.jsx';
import FormResume from '../../components/FormResume.jsx';
import PercentageDisplay from '../../components/PercentageDisplay.jsx';
import { useCallback, useEffect, useState } from 'react';
import { getPersonInfoById, getPromiseInfoById, getRecordListById } from '../../api';

const HeadProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 0 20px;
    width: 100%;
    flex: 1;
`;

const TextContainer = styled.div`
    width: 100%;
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
    width: 100%;
    display: flex;
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
    const [personInfo, setPersonInfo] = useState([]);
    const [promiseInfo, setPromiseInfo] = useState([]);
    const [recordInfo, setRecordInfo] = useState([]);
    

    const fetchProfileData = async () => {
        try {
            const data = await getPersonInfoById(1);
            setPersonInfo(data);
        } catch (error) {
            console.error('Error fetching person info:', error);
        }
    };

    const fetchPromiseData = async () => {
        try {
            const data = await getPromiseInfoById(1);
            setPromiseInfo(data);
        } catch (error) {
            console.error('Error fetching promise info:', error);
        }
    };
    
    const fetchRecordData = async () => {
        try {
            const data = await getRecordListById(1);
            setRecordInfo(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching record list:', error);
        }
    };


    const fetchDataCallback = useCallback(() => {
        fetchProfileData();
        fetchPromiseData();
        fetchRecordData();
    }, []);

    useEffect(() => {
        fetchDataCallback();
        // eslint-disable-next-line
    }, []);

    return (
    <PageBox>
        <SideBar
        navMenus={navMenus}
        navSubMenus={navSubMenus}/>
        <MainBox>
            <HeaderWrapper>
                정치인 프로필 - {personInfo.position == "대통령"? "대통령" : "도지사"}
            </HeaderWrapper>
            <HorizontalDivider />
            <ContainerBox>
                <HeadProfile>
                    <ImageWrapper src={personInfo.photo} alt="대통령 이미지" />
                    <TextContainer>
                        <NameContainer>
                            <TextPosition>{personInfo.position}</TextPosition>
                            <TextName>{personInfo.name}</TextName>
                        </NameContainer>
                        <ResumeContainer>
                            <FormContainer>
                               {recordInfo.slice(-8, -4).map((record, index) => (
                                   <FormResume key={index} contentText={record.history} />
                               ))}
                            </FormContainer>
                            <FormContainer>
                                {recordInfo.slice(-4, -1).map((record, index) => (
                                   <FormResume key={index} contentText={record.history} />
                               ))}
                            </FormContainer>
                        </ResumeContainer>
                    </TextContainer>
                </HeadProfile>
                <HorizontalDivider />
                <ProportionContainer>
                    <PercentageDisplay label="지지율" percentage={Math.round(personInfo.supporting)}/>
                    <PercentageDisplay label="공약 달성도" percentage={Math.round(personInfo.achievement)}/>
                </ProportionContainer>
                <PromiseContainer>
                    공약
                    <PromiseListWrapper>
                        <FormListContainer>
                            {promiseInfo.slice(0, 4).map((promise, index) => (
                                <FormEmployment
                                    key={index}
                                    HeaderText={`공약 ${promise.id}`}
                                    ContentText={promise.promiseDetail}
                                    isSucceed={promise.hasPromise}
                                />
                            ))}
                        </FormListContainer>
                        <VerticalDivider />
                        <FormListContainer>
                            {promiseInfo.slice(4, 8).map((promise, index) => (
                                <FormEmployment
                                    key={index}
                                    HeaderText={`공약 ${promise.id}`}
                                    ContentText={promise.promiseDetail}
                                    isSucceed={promise.hasPromise}
                                />
                            ))}
                        </FormListContainer>
                    </PromiseListWrapper>
                </PromiseContainer>
            </ContainerBox>
        </MainBox>
    </PageBox>
    );
};

export default ProfilePage;
