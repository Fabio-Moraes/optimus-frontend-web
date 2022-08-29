import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import {
  Home,
  Support,
  ListAlt,
  Exit
} from '../../styles/Icons';

export const Container = styled.div`
  user-select: none;

  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 550px) {
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
  }
`;

export const Forehead = styled.div`
  z-index: 2;
  top: 0;
  background: var(--primary);
  justify-content: space-between;
  flex-direction: column;

  display: flex;
  align-items: center;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

`;

interface buttonProps {
  path: string;
}

const activeButtonCSS = css`
  background: #a29995;
`;

const disabledButtonCSS = css`
  &:hover {
    background: rgba(162, 153, 149, 0.3);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
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
  width: 100%;

  cursor: pointer;

  ${({ path }: buttonProps) => {
    const location = useLocation();
    return path === location.pathname ? activeButtonCSS : disabledButtonCSS;
  }};
`;

export const LogoImage = styled.img.attrs({
  src: 'https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/optimus-prime/Frame.png',
  border: '0',
})`
  width: 60px;
  height: auto;
  margin-right: 5px;
  margin-left: -5%;  

  border-radius: 6%;
  margin-bottom: 15px;
  margin-top: 5px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

> div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

  > div > strong {
    color: #FFF;
    font-size: 15px;
  }
  > div > span {
    color: #C3C3C3;
    font-size: 13px;
  }
`;

export const OnlineInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 25px;
  padding-bottom: 10px;
  > strong {
    color: #FFF;
    font-size: 25px;
  }
  > span {
    color: #389743;
    font-size: 14px;
  }
`;

export const MenuHeader = styled.div`
  left: 0;
  z-index: 2;
  position: sticky;
  top: 0;

  background: var(--primary);
  width: 100%;

  > Button {
    margin: 0px 10px 0px 10px;
  }
  
  > Button:first-child {
    margin: 0px 10px 0px 0px;
  }

  > Button:last-child {
    margin: 0px 0px 0px 10px;
  }
  


  border-top: 1px solid var(--outline);
  border-bottom: 1.7px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(20px, max(10vw, 10px));

  @media (min-width: 550px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--white);
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const ListIcon = styled(ListAlt)`
  ${iconCSS}
`;
export const SupportIcon = styled(Support)`
  ${iconCSS}
`;
export const ExitIcon = styled(Exit)`
  ${iconCSS};
`;
