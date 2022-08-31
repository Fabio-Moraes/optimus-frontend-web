import styled, { css } from 'styled-components';
import { Search, ListAlt } from '../../styles/Icons';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
  justify-content: center;

  > h1 {
    font-size: 20px;
    padding-bottom: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 39px;
  margin-left: 5px;
  font-size: 14px;
  padding: 0 10px 0 52px;
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

export const ClearIcon = styled(Search)`
  width: 27px;
  height: 27px;
  position: absolute;
  margin-left: 230px;
  top:15px;
  fill: var(--gray);
`;

export const SearchWrapper = styled.div`
  position: sticky;
  top: 65px;
  z-index: 2;
  background: var(--primary);
  border-bottom: 1px solid var(--outline);
  max-height: 57px;
  padding: 8px 0 9px 13px;

  flex-direction: row;

  @media (min-width: 550px) {
    top: 0px;
  }

  > div {
    width: min(210px, max(85vw, 100px));
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--white);
`;

export const Button = styled.button`
  display: flex;
  position: static;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  outline: 0;
  background: #fff;
  border-radius: 5px;
  padding: 1px 10px 1px 10px;

  cursor: pointer;
`;

export const ListIcon = styled(ListAlt)`
  ${iconCSS}
`;
