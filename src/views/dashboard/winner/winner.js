import React from "react";
import Drawer from "../../../components/drawer";
import TypoGraphy from "@mui/material/Typography";
import Grid from "@mui/material/Grid"
export default function Winner() {
  return (
    // <Grid>
    <div>
      <TypoGraphy sx={{ position: "relative", top: 5, left: 500, zIndex: 3 }}>
        Bi chamd hairtai
      </TypoGraphy>
      <Drawer />
    </div>
    // </Grid>
  );
}
