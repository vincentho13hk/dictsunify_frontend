import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Routes from "./routes";
import { store } from "./store/store";
import { darkTheme } from "./themes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <NavBar />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
