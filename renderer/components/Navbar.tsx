import React from "react";
import Link from "../components/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StorageIcon from "@mui/icons-material/Storage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <AccountBalanceIcon />
            <Typography variant="body1" sx={{ ml: 1 }}>
              <Link href="/cari">Cari Hesaplar</Link>
            </Typography>
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <StorageIcon />
            <Typography variant="body1" sx={{ ml: 1 }}>
              <Link href="/stok">Stok</Link>
            </Typography>
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <AttachMoneyIcon />
            <Typography variant="body1" sx={{ ml: 1 }}>
              <Link href="/kasa">Kasa</Link>
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
