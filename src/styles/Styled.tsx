import styled from '@emotion/styled';

export const JoinSection = styled.section`
  width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.lightgray2};
`;

export const JoinTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const FormContainer = styled.section`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
