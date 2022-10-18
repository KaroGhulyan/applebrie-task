import styled from "styled-components";
import { Card } from "antd";

export const UserCard = styled(Card)`
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0.5em;
  max-height: 100px;
  background-color: ${(props) => props.theme.colors.appMainColor};
  .ant-card-body {
    border-radius: 10px;
    background-color: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-title {
    margin-right: 30px;
    h3 {
      font-size: 1.3em;
      font-weight: 700;
      color: ${(props) => props.theme.colors.appTextColor};
    }
    small {
      color: lightslategrey;
    }
  }
`;

export const PostCard = styled(Card)`
  border-radius: 10px;
  padding: 5px;
  margin: 0.5em;
  background-color: ${(props) => props.theme.colors.appMainColor};
  color: ${(props) => props.theme.colors.appTextColor};
  .ant-card-head-title {
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.appTextColor};
  }
`;
