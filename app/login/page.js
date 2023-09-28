"use client";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import "../scss/index.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react"; // Import signIn from next-auth/react
import Link from "next/link";

export default function LoginPage() {
  const handleGitHubSignIn = () => {
    signIn("github", { callbackUrl: "/" });
  };

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
              <Button leftIcon={<GitHubIcon />} onClick={handleGitHubSignIn}>
                Login With Github
              </Button>
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
