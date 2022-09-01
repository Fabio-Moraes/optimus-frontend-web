import styled, { css, keyframes } from 'styled-components';
import { Search, ListAlt, TextClearFormatting, RestartAlt } from '../../styles/Icons';

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

export const ClearIcon = styled(TextClearFormatting)`
  width: 28px;
  height: 28px;
  /* position: absolute; */
  fill: #FFF;
  `;

const RotationAnimation = keyframes`  
    from { transform: rotate(0deg); }
    to {  transform: rotate(360deg); }
  `;

export const RestartAltIcon = styled(RestartAlt)`
  width: 29px;
  height: 29px;
  margin-bottom: 3px;
  fill: #FFF;
`

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

  > div:first-child {
    margin-left: 230px;
    position: absolute;

    > Button:last-child {
      /* animation: ${RotationAnimation} reverse linear 500ms infinite; */
    }
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
  /* padding: 8px 10px 1px 10px; */
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  
  /* background-color: #456; */
  
  margin-top: 6px;
  margin-right: 15px;

  top: 12px;
  width: 30px;
  height: 30px;


  cursor: pointer;
`;

export const ListIcon = styled(ListAlt)`
  ${iconCSS}
`;
