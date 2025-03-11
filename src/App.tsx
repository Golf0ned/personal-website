import { BrowserRouter, Routes, Route } from "react-router";

import { AppShell, MantineProvider } from "@mantine/core";
import { ParallaxProvider } from "react-scroll-parallax";
import "@mantine/core/styles.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";

function App() {
    return (
        <ParallaxProvider>
            <MantineProvider>
                <AppShell
                    header={{ height: 50 }}
                    padding="md"
                >
                    <AppShell.Header>
                        <Navbar />
                    </AppShell.Header>

                    <AppShell.Main>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </BrowserRouter>
                    </AppShell.Main>

                </AppShell>
            </MantineProvider>
        </ParallaxProvider>
    );
}

export default App
