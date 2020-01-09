import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  width: 95%;
  margin: 20px 10px 0 10px;
  padding: 0 10px 0 0;
  flex-direction: row;
`;

export const ImageWrapper = styled.View`
  flex: 0.1;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const ShimmerImage = styled(ShimmerPlaceHolder)`
  width: 26px;
  height: 26px;
  margin-bottom: 10px;
`;

export const InfoWrapper = styled.View`
  flex: 0.9;
  justify-content: center;
  align-items: center;
`;

export const ShimmerInfo = styled(ShimmerPlaceHolder)`
  width: 100%;
  height: 15px;
  margin-bottom: 10px;
`;

export default function LoadingList({ list }) {
  function shimmerRow(numberRow) {
    const shimmerRows = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < numberRow; index++) {
      shimmerRows.push(
        <Container key={index}>
          <ImageWrapper>
            <ShimmerImage autoRun />
          </ImageWrapper>
          <InfoWrapper>
            <ShimmerInfo autoRun />
            <ShimmerInfo autoRun />
          </InfoWrapper>
        </Container>
      );
    }
    return shimmerRows;
  }

  return shimmerRow(list);
}

LoadingList.propTypes = {
  list: PropTypes.number,
};

LoadingList.defaultProps = {
  list: 5,
};
