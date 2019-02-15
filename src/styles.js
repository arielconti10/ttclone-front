import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    margin: 20px 0 0;
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    
    input {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      height: 44px;
      padding: 0 15px;
      font-size: 14px;
    }

    button {
      margin: 10px 0 0;
      background: #4bb0ee;
      border-radius: 5px;
      height: 44px;
      border: 0;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background: #42a1db;
      }
    }
}`;

export const TimelineWrapper = styled.section`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  form { 
    width: 100%;
    background: #e9f1f6;
    padding: 20px;
    border-radius: 5px;
    margin: 30px 0;

    textarea {
      border: 3px solid #d8e5ed;
      border-radius: 5px;
      font-size: 14px;
      padding: 15px;
      width: 100%;
      resize: none;
    }
  }`;

export const TweetList = styled.ul`
  list-style: none;
  color: #1c2022;
`