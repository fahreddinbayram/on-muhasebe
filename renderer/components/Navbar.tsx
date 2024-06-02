import React from "react";
import Link from "../components/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StorageIcon from "@mui/icons-material/Storage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const Drawer = styled(AppBar)({
  height: "100vh",
  width: "250px",
  left: 0,
  top: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 0",
  backgroundColor: "#1976d2",
});

const NavLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
  width: "100%", // Link'in tam genişlikte olması için
});

const NavIconButton = styled(IconButton)({
  color: "inherit",
  display: "flex",
  justifyContent: "flex-start", // İçeriği sola hizalamak için
  width: "100%", // Butonun tam genişlikte olması için
  height: "50px", // Sabit yükseklik belirlemek için
  padding: "0 20px", // Yatayda boşluk eklemek için
  borderRadius: "0px", // Border radius'u kaldırmak için
  "&:hover": {
    backgroundColor: orange[700],
    borderRadius: "0px", // Hover durumunda border radius'u kaldırmak için
  },
});

const Navbar: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Drawer position="fixed">
        <Toolbar
          sx={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            flexGrow: 1,
          }}
        >
          <NavLink href="/cari">
            <NavIconButton>
              <AccountBalanceIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>
                Cari Hesaplar
              </Typography>
            </NavIconButton>
          </NavLink>
          <NavLink href="/stok">
            <NavIconButton>
              <StorageIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>
                Stok
              </Typography>
            </NavIconButton>
          </NavLink>
          <NavLink href="/kasa">
            <NavIconButton>
              <AttachMoneyIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>
                Kasa
              </Typography>
            </NavIconButton>
          </NavLink>
          <Box sx={{ flexGrow: 1 }} />
          <NavIconButton onClick={() => console.log("Çıkış yapıldı")}>
            <ExitToAppIcon />
            <Typography variant="body1" sx={{ ml: 1 }}>
              Çıkış Yap
            </Typography>
          </NavIconButton>
        </Toolbar>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>{/* Diğer içerikler burada yer alacak */}</Box>
    </Box>
  );
};

export default Navbar;
