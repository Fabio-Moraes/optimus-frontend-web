import { LocationOn, Cake } from '../../styles/Icons';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  overflow: auto;  

  align-items: center;

  max-height: 100%;
  min-height: 500px;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }  
`;

export const Banner = styled.div`
  width: 100%;
  flex-shrink: 0;
  height: min(33vw, 300px);
  width: auto;
  height: auto;
  position: relative;
`;

export const Imagen = styled.img.attrs({
  src: 'https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/optimus-prime/logox.png?t=2022-08-24T17%3A40%3A13.216Z',
  border: '0'
})`
  flex-shrink: 0;
  max-width: 100%;
  height: min(33vw, 300px);
  width: auto;
  height: auto;
  position: relative;
  border-bottom: 2px solid var(--outline);
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;


export const List = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;

`;

export const DateCardToday = styled.div`
  font-size: 17px;
  /* margin-top: 2px; */
  padding: 10px;
  border-radius: 8px;
  background: #FFF;
  border: 2.7px solid var(--outline);
`;