import styled from "styled-components";
import { Layout, Spin } from "antd";

const { Content, Header } = Layout;

export const MainLayout = styled(Layout)`
  background-color: rgb(255, 255, 255);
  border-radius: 60px;
  border: 15px solid rgba(255, 255, 255, 0.37);
  background-clip: padding-box;
  height: 80vh;
  overflow: auto;
`;

export const AppContent = styled(Content)`
  padding: 0 30px;
  background: ${(props) => props.theme.colors.appMainColor};
`;

export const AppLayout = styled(Content)`
  background: ${(props) => props.theme.colors.appMainColor};
  overflow: clip;
`;

export const AppHeaderLayout = styled(Header)`
  background: ${(props) => props.theme.colors.appMainColor};
  color: ${(props) => props.theme.colors.appTextColor};
`;

export const AppSpinner = styled(Spin)`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
