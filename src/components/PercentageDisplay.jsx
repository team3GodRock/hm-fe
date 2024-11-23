import styled from "styled-components";
import PropTypes from "prop-types";

const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 300px;
    height: 100px;
`;

const ProgressHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 32px;
    font-weight: 800;
    gap: 40px;
`;

const ProgressLabel = styled.div``;

const ProgressBarWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 20px;
    background-color: #E4E7EC;
    border-radius: 10px;
    overflow: hidden;
`;

const ProgressBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #E4E7EC;
    border-radius: 10px;
`;

const ProgressBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #3E6AF2;
    border-radius: 10px;
    z-index: 1;
`;

const PercentageDisplay = ({ label, percentage }) => {
    return (
        <ProgressContainer>
            <ProgressHeader>
                <ProgressLabel>{label}</ProgressLabel>
                <ProgressLabel>{percentage}%</ProgressLabel>
            </ProgressHeader>
            <ProgressBarWrapper>
                <ProgressBackground />
                <ProgressBar percentage={percentage} />
            </ProgressBarWrapper>
        </ProgressContainer>
    );
};

PercentageDisplay.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
};

export default PercentageDisplay;
