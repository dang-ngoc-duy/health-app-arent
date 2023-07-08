import React from "react";
import { useRoutes } from "react-router-dom";
import { rootRoutes } from "src/routes";

import StyledMainLayout from "./style";

const MainLayout: React.FC = () => {
  const routes = useRoutes(rootRoutes);

  return (
    <>
      <StyledMainLayout>{routes}</StyledMainLayout>
    </>
  );
};

export default MainLayout;
