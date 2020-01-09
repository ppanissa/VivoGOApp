import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

function randomFlex() {
  return (Math.random() * (0.4 - 0.7) + 0.7).toFixed(2);
}

const LoadingContainer = styled.View`
  flex: 1;
`;

const LoadingTitle = styled.View`
  height: 35px;
  width: 65%;
  margin: 20px 0 0 0;
  flex-direction: row;
`;

const Container = styled.View`
  height: 50px;
  margin-top: 10px;
  padding: 10px 0;
  justify-content: center;
`;
const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentText = styled.View`
  flex: ${props => props.flexNumber || 0.7};
  height: 100%;
`;

const ContentSwitch = styled.View`
  flex: 0.15;
  height: 100%;
`;

export const ShimmerInfo = styled(ShimmerPlaceHolder)`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border-radius: ${props => (props.radius ? props.radius : '0px')};
`;

export default function Loading({ list }) {
  function shimmerRow(numberRow) {
    const shimmerRows = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < numberRow; index++) {
      shimmerRows.push(
        <Container key={index.toString()}>
          <Content>
            <ContentText flexNumber={randomFlex()}>
              <ShimmerInfo autoRun radius="5px" />
            </ContentText>
            <ContentSwitch>
              <ShimmerInfo autoRun radius="50px" />
            </ContentSwitch>
          </Content>
        </Container>
      );
    }
    return shimmerRows;
  }

  return (
    <LoadingContainer>
      <LoadingTitle>
        <ShimmerInfo autoRun radius="2px" />
      </LoadingTitle>
      {shimmerRow(list)}
    </LoadingContainer>
  );
}

Loading.propTypes = {
  list: PropTypes.number,
};

Loading.defaultProps = {
  list: 5,
};
