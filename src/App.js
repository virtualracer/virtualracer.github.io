import Image from "./Image.js";
import Title from "./Title";
import About from "./About";
import Mail from "./Mail.js";
import SocialIcons from "./SocialIcons.js";
import Theme from "./Theme.js";
import { useState } from "react";
import { ThemeProvider } from "./ThemeContext.js";

function App() {
  return (
    <>
      <ThemeProvider>
        <Image />
        <Title />
        <About />
        <hr />
        <Mail />
        <SocialIcons />
        <Theme />
      </ThemeProvider>
    </>
  );
}

export default App;
