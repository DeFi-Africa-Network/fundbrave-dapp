// react
import { FC, PropsWithChildren } from "react";

// components
import Navigation from "./navigation";

// shared components
import { CampaignDialog } from "@/components/shared";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <div className="flex-col md:flex">
        <Navigation />
        <div className="container flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CampaignDialog />
            </div>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
