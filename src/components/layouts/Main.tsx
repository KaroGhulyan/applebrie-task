import React, { ReactNode, useState, Suspense } from "react";
import {
  AppContent,
  AppLayout,
  MainLayout,
} from "../../assets/styles/components/layouts";
import { AppHeader } from "./AppHeader";
import { Spinner } from "../shared";
import { AppSider } from "./AppSider";

interface MainInterface {
  children: ReactNode;
}

export const Main: React.FC<MainInterface> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MainLayout>
      <AppSider collapsed={collapsed} />
      <AppLayout className="site-layout">
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Suspense fallback={<Spinner />}>
          <AppContent>{children}</AppContent>
        </Suspense>
      </AppLayout>
    </MainLayout>
  );
};
