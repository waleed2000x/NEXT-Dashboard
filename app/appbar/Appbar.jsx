"use client";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Appbar() {
  const route = usePathname();
  console.log(route);
  return (
    <div className="appbar-parent">
      <div className="appbar-center">
        <div className="logo">
          <Link href="/">
            <MonitorHeartOutlinedIcon />
            <h1>DataPulse</h1>
          </Link>
        </div>
        <div className="nav-items">
          {route === "/login" || route === "/signup" ? null : (
            <div className="nav-search">
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
                <MenuList
                  style={{
                    backgroundColor: "#3498DB",
                    padding: "10px",
                    width: "300px",
                  }}
                >
                  {route === "/" ? null : (
                    <>
                      <MenuItem
                        _hover={{ bg: "#6bb3e3" }}
                        backgroundColor="#3498DB"
                      >
                        <b>Account</b>
                      </MenuItem>
                      <MenuItem
                        _hover={{ bg: "#6bb3e3" }}
                        backgroundColor="#248bd1"
                      >
                        <b>Profile</b>
                      </MenuItem>
                      <MenuItem
                        _hover={{ bg: "#6bb3e3" }}
                        backgroundColor="#3498DB"
                      >
                        <b>Settings</b>
                      </MenuItem>
                      <MenuItem
                        _hover={{ bg: "#6bb3e3" }}
                        backgroundColor="#248bd1"
                      >
                        <b>Logout</b>
                      </MenuItem>
                    </>
                  )}
                  <Link href="/signup">
                    <MenuItem
                      _hover={{ bg: "#6bb3e3" }}
                      backgroundColor="#3498DB"
                    >
                      <b>Signup</b>
                    </MenuItem>
                  </Link>
                  <Link href="/login">
                    <MenuItem
                      _hover={{ bg: "#6bb3e3" }}
                      backgroundColor="#248bd1"
                    >
                      <b>Login</b>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
