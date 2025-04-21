import {Header} from './components/Header/Header.tsx';
import {Posts} from './components/Post/Posts.tsx';
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";


function App() {
    return (
        <ThemeProvider attribute="class">
            <Theme appearance="inherit" accentColor="violet" grayColor="slate">
            <Header />
            <Posts />
            </Theme>
        </ThemeProvider>
    )
}

export default App