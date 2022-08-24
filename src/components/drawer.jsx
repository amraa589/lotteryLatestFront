import * as React from "react";
import { Box, Grid } from "@mui/material";
import {
  styled,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { Link, useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@mui/icons-material";

const data = [
  { icon: <People />, label: "Хэрэглэгч", link: "/dashboard/user" },
  {
    icon: <PersonOutlineOutlinedIcon />,
    label: "Харилцагч",
    link: "/dashboard/customer",
  },
  {
    icon: <ReceiptLongOutlinedIcon />,
    label: "Сугалаа",
    link: "/dashboard/lottery",
  },
  {
    icon: <EmojiEventsOutlinedIcon />,
    label: "Ялагч тодруулах",
    link: "/dashboard/winner",
  },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const theme = useTheme();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex", float: "left" }}>
      <Paper
        elevation={0}
        sx={{ maxWidth: 256, background: theme.palette.background.sidebar }}
      >
        <FireNav component="nav" disablePadding>
          <ListItemButton component="a" href="#customized-list">
            <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
            <ListItemText
              sx={{ my: 0, color: "white" }}
              primary="Сугалаат аян"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />
          </ListItemButton>
          <Divider />
          <Box
            sx={{
              bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
              pb: open ? 2 : 0,
              height: 537,
            }}
          >
            <ListItemButton
              alignItems="flex-start"
              onClick={() => setOpen(!open)}
              sx={{
                px: 3,
                pt: 2.5,
                pb: open ? 0 : 2.5,
                "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
              }}
            >
              <ListItemText
                primary="Цэс"
                primaryTypographyProps={{
                  fontSize: 15,
                  color: "white",
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "2px",
                }}
                secondary="User, Customer, Lottery, Winner"
                secondaryTypographyProps={{
                  noWrap: true,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                }}
                sx={{ my: 0 }}
              />
              <KeyboardArrowDown
                sx={{
                  mr: -1,
                  opacity: 0,
                  transform: open ? "rotate(-180deg)" : "rotate(0)",
                  transition: "0.2s",
                }}
              />
            </ListItemButton>
            {open &&
              data.map((item) => (
                <ListItemButton
                  key={item.label}
                  sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                  component={Link}
                  to={item.link}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              ))}
          </Box>
          <Box flexGrow={1}>
            <IconButton onClick={logout} sx={{ color: "white", minHeight:50, minWidth:50 }}>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </FireNav>
      </Paper>
    </Box>
  );
}
