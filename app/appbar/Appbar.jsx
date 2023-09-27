import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import Link from "next/link";
export default function Appbar() {
  return (
    <div className="appbar-parent">
      <div className="appbar-center">
        <div className="logo">
          <MonitorHeartOutlinedIcon />
          <Link href="/login">
            <h1>DataPulse</h1>
          </Link>
        </div>
        <div className="nav-items">
          <div className="nav-search">
            <Input variant="outline" size="lg" type="text" />
            <Button
              variant="ghost"
              size="lg"
              _hover={{ bg: "#6bb3e3" }}
              leftIcon={<SearchIcon />}
            >
              Search
            </Button>
            <Menu>
              <MenuButton
                _hover={{ bg: "#6bb3e3" }}
                as={Button}
                variant="ghost"
                size="lg"
                rightIcon={<ArrowDropDownIcon />}
                className="menu-icon-appbar"
              >
                <PersonIcon />
              </MenuButton>
              <MenuList style={{ backgroundColor: "#3498DB" }}>
                <MenuItem _hover={{ bg: "#6bb3e3" }} backgroundColor="#3498DB">
                  Account
                </MenuItem>
                <MenuItem _hover={{ bg: "#6bb3e3" }} backgroundColor="#248bd1">
                  Profile
                </MenuItem>
                <MenuItem _hover={{ bg: "#6bb3e3" }} backgroundColor="#3498DB">
                  Settings
                </MenuItem>
                <Link href="/login">
                  <MenuItem
                    _hover={{ bg: "#6bb3e3" }}
                    backgroundColor="#248bd1"
                  >
                    Login
                  </MenuItem>
                </Link>
                <Link href="/signup">
                  <MenuItem
                    _hover={{ bg: "#6bb3e3" }}
                    backgroundColor="#3498DB"
                  >
                    Signup
                  </MenuItem>
                </Link>
                <MenuItem _hover={{ bg: "#6bb3e3" }} backgroundColor="#248bd1">
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
