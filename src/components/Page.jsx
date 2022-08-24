import { Box } from "@mui/system";
import React from "react";

const Page = ({ children, ...props }) => {
  return <Box sx={{ padding: 4 }}>{children}</Box>;
};

export default Page;
