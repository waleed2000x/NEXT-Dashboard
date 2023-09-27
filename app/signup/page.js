import { FormLabel, Input } from "@chakra-ui/react";
import "../scss/index.css";

export default function page() {
  return (
    <div className="parent-signup">
      <div className="signup-card">
        <div className="signup-form">
          <h1>Signup</h1>
          <div className="signup-inputs">
            <div className="input-row">
              <div className="input">
                <FormLabel>First Name</FormLabel>
                <Input variant="filled" />
              </div>
              <div className="input">
                <FormLabel>Last Name</FormLabel>
                <Input variant="filled" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
