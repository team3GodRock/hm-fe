import styled from "styled-components";
import { Dot } from "../styles/globalstyles";
import PropTypes from "prop-types";


const FormContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

const TextContainer = styled.div`
    display: flex;
`;

const FormResume = ({ contentText }) => {
    return (
        <FormContainer>
            <Dot/>
            <TextContainer>
                {contentText}
            </TextContainer>
        </FormContainer>
    );
};

FormResume.propTypes = {
    contentText: PropTypes.string
};

export default FormResume;