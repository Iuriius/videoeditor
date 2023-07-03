import styled from "@emotion/styled";

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem;

  a {
    margin: 0 0.5rem;
    color: LightGray;
    transition: color 0.3s ease;

    &:hover {
      color: orange;
    }
  }
`;
