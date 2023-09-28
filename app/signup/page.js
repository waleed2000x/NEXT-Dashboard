import { Button, Divider, FormLabel, Input } from "@chakra-ui/react";
import "../scss/index.css";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";

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
                  type="text"
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
            <div className="input-row">
              <div className="input">
                <FormLabel>Password</FormLabel>
                <Input
                  variant="outline"
                  borderColor="white"
                  focusBorderColor="white"
                  type="password"
                  backgroundColor="transparent"
                />
              </div>
              <div className="input">
                <FormLabel>Confirm Pasword</FormLabel>
                <Input
                  variant="outline"
                  borderColor="white"
                  focusBorderColor="white"
                  type="password"
                />
              </div>
            </div>
            <div className="button-signup">
              <Button
                variant="outline"
                color="facebook"
                size="lg"
                marginTop="20px"
              >
                Signup
              </Button>
              <p>
                Already registered!<Link href="/login">Login</Link>
              </p>
            </div>
            <Divider width="80%" padding="20px" />
            <div className="alternate-login">
              <Button margin="5px" leftIcon={<GitHubIcon />}>
                Login With Github
              </Button>
              <Button margin="5px" colorScheme="blue" leftIcon={<GoogleIcon />}>
                Login With Google
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="powered">
        <p>
          <b>Powered by:</b>
        </p>
        <Image
          src="/images/NextAuth.png"
          alt="NextAuth"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
