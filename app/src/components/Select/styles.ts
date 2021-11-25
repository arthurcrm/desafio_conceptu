import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 60rem;
  max-height: 30rem;

  padding: 4rem 0.5rem;

  border-radius: 0.3rem;

  background: var(--gray);

  button[type='button'] {
    height: 3rem;
    border-radius: 3rem;
    background: #a9ddd6;
    border: 0;

    padding: 0 1.5rem;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--white);
    font-weight: bold;

    transition: filter 0.3s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Title = styled.h3`
  color: white;
  margin-bottom: 1rem;

  font-size: 1.2rem;
`;

export const SelectContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 25rem;

  select {
    padding-left: 0.5rem;
    height: 3rem;
  }
`;
