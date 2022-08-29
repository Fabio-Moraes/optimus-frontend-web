import styled from 'styled-components';

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

  > div {
    /* padding: 0px 0px 0px 100px; */

    > strong {
      color: #000;
      margin-bottom: 5px;
      display: block;
      text-align: start;
      font-size: 15px;
    }

    > span {
      display: block;
      text-align: center;
      font-size: 13px;
      background: #000;
      padding: 2px 5px;
      border-radius: 30px;
      margin-left: -4px;
    }

    /* > strong {
      margin-bottom: 5px;
      display: block;
      text-align: center;
      font-size: 14px;
    } */
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
