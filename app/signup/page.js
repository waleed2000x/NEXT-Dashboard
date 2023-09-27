import { FormLabel, Input } from "@chakra-ui/react";
import "../scss/index.css";

export default function page() {
  return (
    <div className="parent-signup">
      <div className="signup-card">
        <div className="signup-form">
          <h1>
            <b>Signup</b>
          </h1>
          <div className="signup-inputs">
            <div className="input-row">
              <div className="input">
                <FormLabel>First Name</FormLabel>
                <Input
                  variant="outline"
                  borderColor="white"
                  focusBorderColor="white"
                  type="text"
                  backgroundColor="transparent"
                />
              </div>
              <div className="input">
                <FormLabel>Last Name</FormLabel>
                <Input
                  variant="outline"
                  borderColor="white"
                  focusBorderColor="white"
                  type="password"
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input">
                <FormLabel>Email</FormLabel>
                <Input
                  variant="outline"
                  borderColor="white"
                  focusBorderColor="white"
                  type="email"
                  backgroundColor="transparent"
                />
              </div>
              <div className="input">
                <FormLabel>Contact</FormLabel>
                <Input
                  variant="outline"
                  borderColor="white"
                  focusBorderColor="white"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
