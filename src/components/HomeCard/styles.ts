import styled, { css } from 'styled-components';
import moment from 'moment';

interface dayProps {
  day: string;
}

const activeTodayCSS = css`
    background: #39e75f;
    &:hover {
    background: #1fd655;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

const disabledTodayCSS = css`
  &:hover {
    background: rgba(162, 153, 149, 0.3);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.button`
  display: flex;
  flex-direction: column;

  padding: 9px;
  max-width: 100%;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2px;
`;

export const Description = styled.div`
  font-size: 17px;
  /* margin-top: 2px; */
  padding: 10px;
  border-radius: 8px;
  background-color: #FFF;
  border: 2.7px solid var(--outline);

  ${({ day }: dayProps) => {
    return String(day) === String(moment.utc().format('DD/MM/YY')) ? activeTodayCSS : disabledTodayCSS;
  }};
  > p {text-align: start}
`;