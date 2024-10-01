import "./App.css";
import ChatWindow from "./components/ChatLayout/ChatLayout";
import { ThemeProviderWrapper } from "./utils/DardThemeContext";

function App() {
  return (
    <ThemeProviderWrapper>
      <ChatWindow />
    </ThemeProviderWrapper>
  );
}

export default App;
