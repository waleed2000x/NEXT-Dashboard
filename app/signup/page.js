import { Input } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <div className="parent-signup">
      <div className="signup-card">
        <div className="signup-form">
          <h1>Signup</h1>
          <div className="input-signup">
            <div className="input-row">
              <Input variant="filled" />
              <Input variant="filled" />
            </div>
            <div className="input-row">
              <Input variant="filled" />
              <Input variant="filled" />
            </div>
            <div className="input-row">
              <Input variant="filled" />
              <Input variant="filled" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
