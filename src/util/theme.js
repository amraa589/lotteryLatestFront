import { createTheme } from "@mui/material/styles";

export default createTheme({
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
  palette: {
    // mode: "light",
    // primary: { main: "rgb(102, 157, 246)" },
    background: { sidebar: "rgb(5, 30, 52)" },
  },
});
