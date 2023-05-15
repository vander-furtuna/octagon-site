import styled from "styled-components";

export const SubtitleContainer = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.title.color};
  position: relative;
  text-align: left;

  width: fit-content;
`;
