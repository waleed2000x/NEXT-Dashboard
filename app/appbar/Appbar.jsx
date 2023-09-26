"use client";
import { Button, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function Appbar() {
  return (
    <div className="appbar-parent">
      <div className="appbar-center">
        <div className="logo">
          <h1>DataPulse</h1>
        </div>
        <div className="nav-items">
          <div className="nav-search">
            <Input variant="outline" placeholder="Search:" type="text" />
            <Button
              colorScheme="gray"
              variant="outline"
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
