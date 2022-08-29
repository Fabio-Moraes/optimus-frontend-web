import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ccc;

  min-height: 500px;
`;

export const Tweets = styled.div`
  /* display: flex;
  flex-direction: column;

  flex-shrink: 0;
 */

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
