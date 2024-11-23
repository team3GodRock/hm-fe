import styled from "styled-components"
import PropTypes from "prop-types";
import { useEffect, useState, useCallback} from "react";
import { Dot, HorizontalDivider } from "../styles/globalstyles";
import { getPromiseInfoById } from "../api";

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
`;

const CandidateName = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #3E6AF2;
`;

const ProfileName = styled.div`
    font-size: 24px;
    font-weight: 600;
`;

const TextInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px 0;
    gap: 4px;
    align-items: center;
`;

const InnerText = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #3E6AF2;
`;

const ImageWrapper = styled.img`
    display: flex;
    width: 150px;
    height: 180px;
    border-radius: 10px;
    margin: 0 20px;
`;

const PromiseContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    align-items: flex-start;
    justify-content: flex-start;
`;

const PromiseContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
`;

const PromiseText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const TextWrapper = styled.div`
    font-size: 14px;
    font-weight: 400;
    align-items: center;
    justify-content: center;
`;


const FormProfile = ({ contentArray }) => {
    const [profileData, setProfileData] = useState([]);
    const [promiseData, setPromiseData] = useState([]);

    useEffect(() => {
        setProfileData(contentArray);
    }, [contentArray]);

    const fetchPromiseData = async () => {
        try {
            const data = await getPromiseInfoById(profileData.id);
            setPromiseData(data);
        } catch (error) {
            console.error('Error fetching promise data:', error);
        }
    };

    const fetchDataCallback = useCallback(() => {
        fetchPromiseData();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchDataCallback();
    // eslint-disable-next-line
    }, []);


    return (
        <>
            <FormContainer>
                <TextContainer>
                    <CandidateName>{profileData.index + 1}번 후보</CandidateName>
                    <ProfileName>{profileData.name}</ProfileName>
                    <TextInnerContainer>
                        <InnerText>{profileData.affliation}</InnerText>
                        <InnerText>지지율 {profileData.supporting}%</InnerText>
                    </TextInnerContainer>
                </TextContainer>
                <ImageWrapper src={profileData.photo}/>
                <PromiseContainer>
                    {promiseData.slice(0, 6).map((promise, index) => (
                        <PromiseContent key={index}>
                            <PromiseText>
                                <Dot/>
                                <TextWrapper>{promise.promiseDetail}</TextWrapper>
                            </PromiseText>
                        </PromiseContent>
                    ))}
                </PromiseContainer>
            </FormContainer>
            <HorizontalDivider/>
        </>
    )
};

FormProfile.propTypes = {
    contentArray: PropTypes.array
};

export default FormProfile;