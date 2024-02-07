import { PersonalHomepage } from "./features/PersonalHomepage";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./globalStyle";
import { selectTheme } from "./Header/ThemeButton/themeSwitchSlice";
import { themeDark, themeLight } from "./theme"


function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
