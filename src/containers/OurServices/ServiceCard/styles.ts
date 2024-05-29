import styled from 'styled-components'

interface IServiceCardImage {
  image_url: string
}

export const ServiceCardContainer = styled.div`
  background: ${({ theme }) => theme.background.light};
  height: 25rem;
  width: 60rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.outline.light};
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    width: 46rem;
    height: 22rem;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    width: 22rem;
    height: 35rem;
  }
`

export const ServiceCardContent = styled.div`
  padding: 2.625rem 3rem;
  height: 100%;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 750px) {
    padding: 2rem;
  }
`

export const ServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

export const ServiceListOption = styled.li`
  color: ${({ theme }) => theme.text.light};
  list-style: none;
`

export const ServiceCardButton = styled.div`
  margin-top: auto;

  @media screen and (max-width: 750px) {
    margin-left: auto;
  }
`

export const ServiceCardImage = styled.figure`
  height: 100%;
  min-width: 28rem;
  max-width: 28rem;
  position: relative;

  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 900px) {
    min-width: 20rem;
    max-width: 20rem;
  }

  @media screen and (max-width: 750px) {
    min-width: 100%;
    max-width: 100%;
    height: 20rem;
  }
`
