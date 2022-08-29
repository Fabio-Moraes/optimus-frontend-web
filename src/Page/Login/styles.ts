import styled from 'styled-components';
import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30em;
`;

export const Box = styled.div`
  display: flex;
  background-color: #FFF;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 10px;

  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  padding: 15px;

  > div {
    width: 100%;
  }

  /* > button:last-child {
  
  } */
`;

export const Input = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 0px 0 52px;
  border-radius: 7.5px;
  background: var(--secondary);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }
  border: 2px solid #000;
  outline: 0;

  &:focus {
    border: 2px solid #333;

    ~ svg {
      fill: var(--gray);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  position: absolute;
  fill: var(--gray);
`;

export const Button = styled.button`
  display: flex;
    background-color: #333;
    width: 130px;
    min-height: 40px;

    align-items: center;
    justify-content: center;
    border-radius: 6px;

    > span {
      font-size: 15px;
      color: #fff
    }
`;