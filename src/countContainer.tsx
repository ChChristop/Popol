import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/redux/RootState';
import { increaseCount } from './redux';

type CountContainerProps = {};

function CountContainer({}: CountContainerProps) {
  const dispatch = useDispatch();
  const { count, prevCount } = useSelector((state: RootState) => ({
    count: state.countReducer.count,
    prevCount: state.countReducer.prevCount,
  }));

  const onIncreaseCount = () => dispatch(increaseCount());

  return (
    <S.CountContainer>
      <p>이전 count : {prevCount}</p>
      <p>현재 count :{count} </p>
      <button onClick={onIncreaseCount}>버튼 증가</button>
    </S.CountContainer>
  );
}

CountContainer.defaultProps = {} as CountContainerProps;

export default CountContainer;

const S: any = {};
