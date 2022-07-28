import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <Button />
    </ThemeProvider>
  );
}