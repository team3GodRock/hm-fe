import styled from "styled-components";
import PropTypes from "prop-types";

const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 80px;
    padding: 8px 0;
    align-items: center;
`;

const FormBadge = styled.div`
    width: 60px;
    height: 30px;
    display: flex;
    background-color: ${props => props.isSucceed ? "#D6FFDE" : "#F6FABD"};
    border-radius: 10px;
    z-index: 1;
`;

const FormTextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 0;
`;

const FormTextHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 24px;
    font-weight: 400;
`;

const FormTextContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 16px;
    font-weight: 200;
`;

const FormEmployment = ({ HeaderText, ContentText, isSucceed }) => {
    return (
        <FormContainer>
            <FormBadge isSucceed={isSucceed}/>
            <FormTextContainer>
                <FormTextHeader>{HeaderText}</FormTextHeader>
                <FormTextContent>{ContentText}</FormTextContent>
            </FormTextContainer>
        </FormContainer>
    );
};

FormEmployment.propTypes = {
    HeaderText: PropTypes.string,
    ContentText: PropTypes.string,
    isSucceed: PropTypes.bool
};

export default FormEmployment;
