import styled from 'styled-components';

export const ServiceIconCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    svg {
      height: 15rem;
    }
    height: 14rem;
  }
  span {
    width: 15rem;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text.light};
  }
`;
