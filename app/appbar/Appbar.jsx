"use client";
import { Button, Input } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
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
              _hover={{ bg: "#3498DB" }}
              leftIcon={<SearchIcon />}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
