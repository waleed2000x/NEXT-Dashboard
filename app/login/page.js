import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import "../scss/index.css";
import Link from "next/link";
export default function page() {
  return (
    <div className="parent-login">
      <div className="login-card">
        <div className="login-form">
          <h1>
            <b>Login</b>
          </h1>
          <FormControl>
            <div className="inputs">
              <FormLabel>Username/Email</FormLabel>
              <Input
                variant="outline"
                borderColor="white"
                focusBorderColor="white"
                size="lg"
                type="text"
              />
            </div>
            <div className="inputs">
              <FormLabel>Password</FormLabel>
              <Input
                variant="outline"
                borderColor="white"
                focusBorderColor="white"
                size="lg"
                type="password"
              />
            </div>
            <div className="login-button">
              <Button variant="outline" size="lg" color="facebook">
                Login
              </Button>
              <p>
                Not yet signed in?<Link href="/signup">Signup</Link>
              </p>
            </div>
            <Divider color="white" margin="10px 0px" />
            <div className="alternate-login">
              <Button leftIcon={<GitHubIcon />}>Login With Github</Button>
              <Button colorScheme="blue" leftIcon={<GoogleIcon />}>
                Login With Google
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
