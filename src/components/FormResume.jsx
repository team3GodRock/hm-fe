import styled from "styled-components";
import { IconWrapper } from "../styles/globalstyles";
import PropTypes from "prop-types";


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const TextContainer = styled.div`
    display: flex;
`;

const FormResume = (contentText) => {
    return (
        <FormContainer>
            <TextContainer>
                {contentText}
            </TextContainer>
        </FormContainer>
    );
};

PropTypes.FormResume = {
    contentText: PropTypes.string
};

export default FormResume;