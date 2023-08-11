import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5rem;

  .content-numbers {
    height: 400px;
    background-color: red;
  }

  form {
    background: #5555;
    padding: 2rem;
    border-radius: 4px;
  }
`;
export const InputGroupArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:nth-child(2) {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  label {
    font-size: 1.5em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 400;
  }

  textarea {
    resize: none;
    max-width: 400px;
    max-height: 400px;
    font-size: 1.5em;
    outline: none;
    border: 0;
    border-radius: 4px;
    background: #eee;
  }

  input {
    font-size: 1.5em;
    padding: 0.3em 5px;
    outline: none;
    border: 0;
    border-radius: 4px;
    background: #eee;
  }
`;

export const ContentButton = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {

        &:nth-child(1) {
            padding: 10px;
            background: #053;
            color: #DDD;
        }

        padding: 10px 4rem;
        font-size: 1.2em;
        border: 0;
        border-radius: 4px;
        cursor: pointer;

        transition: .5s ease;

        &:hover {
            opacity: 0.75;
        }
    }

`;

export const ContentContacts = styled.div`
  max-height: 400px;
  width: 400px;
  padding: 1rem;
  background: #5555;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .content-area {
    background: #fff;
    padding: 10px;
    border-radius: 4px;

    p {
      font-size: 1.3em;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    }
  }
`;
