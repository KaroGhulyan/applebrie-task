import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { AppHeaderLayout } from "../../assets/styles/components/layouts";

interface HeaderInterface {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}
export const AppHeader: React.FC<HeaderInterface> = ({
  setCollapsed,
  collapsed,
}) => {
  return (
    <AppHeaderLayout>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
    </AppHeaderLayout>
  );
};
