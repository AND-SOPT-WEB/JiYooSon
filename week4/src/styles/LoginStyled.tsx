import styled from "@emotion/styled";

export const LoginSection = styled.section`
  position: fixed;
  top: 10rem;
  left: 50%;
  transform: translate(-50%);
  width: 60rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background01};
`;

export const LoginTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.color.title};
`;

export const FormContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.color.background02};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  border-color: ${({ theme }) => theme.color.button};
`;

export const LoginBtn = styled.button`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.text02};
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0.8rem;
  border-radius: 1rem;
  border-style: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.background01};
  }
`;
