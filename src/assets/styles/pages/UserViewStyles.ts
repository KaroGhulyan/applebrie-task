import styled from "styled-components";

export const UserViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.colors.appTextColor};
  h2 {
    font-weight: bold;
    color: ${(props) => props.theme.colors.appTextColor};
  }
`;
