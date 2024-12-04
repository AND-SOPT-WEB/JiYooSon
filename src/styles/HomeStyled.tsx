import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.background01};
  padding: 2rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.title};
`;

export const Btn = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HeaderBtn = styled.button`
  border-style: none;
  background-color: white;
  color: ${({ theme }) => theme.color.text01};
  border-radius: 1rem;
  padding: 0.8rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

//헤더 끝

export const HomeContainer = styled.section`
  position: fixed;
  top: 10rem;
  left: 50%;
  transform: translate(-50%);
  width: 60rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.background01};
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.color.title};
`;

export const HomeBox = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.color.background02};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
`;

export const MyHobby = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Ladel = styled.label`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text01};
`;

export const OtherHobby = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  border-color: ${({ theme }) => theme.color.button};
`;

export const SearchChoreBtn = styled.button`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.text02};
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0.8rem;
  border-radius: 1rem;
  border-style: none;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.background01};
  }
`;

export const NewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
