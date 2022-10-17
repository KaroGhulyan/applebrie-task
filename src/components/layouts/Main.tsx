import { Layout } from "antd";
import React, { ReactNode, useState } from "react";
import { AppContent, MainLayout } from "../../assets/styles/components/layouts";

interface MainInterface {
  children: ReactNode;
}
export const Main: React.FC<MainInterface> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MainLayout>
      {/*<AppSider collapsed={collapsed} />*/}
      <Layout className="site-layout">
        {/*<AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />*/}
        <h1>dasds</h1>
        <AppContent>{children}</AppContent>
      </Layout>
    </MainLayout>
  );
};
