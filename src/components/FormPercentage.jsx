import styled from "styled-components";
import PropTypes from "prop-types";


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 300px;
    height: 100px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 32px;
    font-weight: 800;
    gap: 40px;
`;

const TextWrapper = styled.div`
`;

const PercentageBar = styled.div`
    width: 100%;
    height: 100%;
    background-color: #3E6AF2;
    border-radius: 10px;
    z-index: 1;
`;

const FormPercentage = ({ text, percentage }) => {
    return (
        <FormContainer>
            <TextContainer>
                <TextWrapper>{text}</TextWrapper>
                <TextWrapper>{percentage}%</TextWrapper>
            </TextContainer>
            <PercentageBar />
        </FormContainer>
    );
};

FormPercentage.propTypes = {
    text: PropTypes.string,
    percentage: PropTypes.number
};

export default FormPercentage;