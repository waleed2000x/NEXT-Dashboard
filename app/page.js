import "./scss/index.css";
import Appbar from "./appbar/Appbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <main className="parent">
        <Appbar />
      </main>
    </ChakraProvider>
  );
}
