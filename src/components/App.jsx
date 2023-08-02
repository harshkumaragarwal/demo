import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Home";
function App() {
  return (
    <>
      <ChakraProvider>
        <Home />
        {/* <Cards /> */}
      </ChakraProvider>
    </>
    //
  );
}

export default App;
