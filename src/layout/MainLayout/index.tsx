import React from "react";
import { useRoutes } from "react-router-dom";
import { rootRoutes } from "src/routes";

import StyledMainLayout from "./style";
import ScrollTopButton from "src/components/common/ScrollTopButton";

const MainLayout: React.FC = () => {
  const routes = useRoutes(rootRoutes);

  return (
    <>
      <StyledMainLayout>{routes}</StyledMainLayout>
      <ScrollTopButton />
    </>
  );
};

export default MainLayout;
