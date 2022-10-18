import React, { useContext } from "react";
import { UsergroupAddOutlined, FileSearchOutlined } from "@ant-design/icons";
import {
  SiderHeader,
  SiderMenu,
  SiderNav,
} from "../../assets/styles/components/layouts";
import { Switch } from "antd";
import { UIConfigContext } from "../../store/context/configStore/UIConfigProvider";
import { UIConfigActionTypes } from "../../store/context/configStore/actions";
import { THEMES_TYPE } from "../../config/UIConfig";
import { useNavigate } from "react-router-dom";

interface AppSiderInterface {
  collapsed: boolean;
}
const NavItems = [
  {
    key: "/",
    icon: <UsergroupAddOutlined />,
    label: "Users",
    link: "/",
  },
  {
    key: "posts",
    icon: <FileSearchOutlined />,
    label: "Posts",
    link: "/posts",
  },
];
export const AppSider: React.FC<AppSiderInterface> = ({ collapsed }) => {
  const { dispatchUIConfigState } = useContext(UIConfigContext);
  const navigate = useNavigate();

  const onChange = (checked: boolean) => {
    dispatchUIConfigState({
      type: UIConfigActionTypes.SetTheme,
      payload: !checked ? THEMES_TYPE.Light : THEMES_TYPE.Dark,
    });
  };

  return (
    <SiderNav trigger={null} collapsible collapsed={collapsed}>
      <SiderHeader>
        <Switch
          checkedChildren="Light"
          unCheckedChildren="Dark"
          onChange={onChange}
        />
      </SiderHeader>
      <SiderMenu
        mode="inline"
        defaultSelectedKeys={["/"]}
        items={NavItems}
        onClick={(e) => navigate(e.key)}
      />
    </SiderNav>
  );
};
