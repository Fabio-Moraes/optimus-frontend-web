import styled, { css } from 'styled-components';
import moment from 'moment';

interface dayProps {
  day: string;
}

const activeTodayCSS = css`
    background: #90EE90;
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

export const ItemContainer = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #FFF;
  border: 2.7px solid var(--outline);
  height: auto;
  width: 262px;
  color: #29303b;
  margin-bottom: 10px;
  margin: 10px;
  padding: 10px;
  align-items: center;

  ${({ day }: dayProps) => {
    return String(day) === String(moment.utc().format('DD/MM/YY')) ? activeTodayCSS : disabledTodayCSS;
  }};

  > div > strong {
  color: #000;
  margin-bottom: 5px;
  display: block;
  text-align: start;
  font-size: 16px;
 }
`;

export const Thumbnail = styled.img`
  width: auto;
  height: 100px;
  border: 0;
  vertical-align: middle;
  float: left;
  background: #fff;
`;
