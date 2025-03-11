import { BrowserRouter, Routes, Route } from "react-router";

import { AppShell, MantineProvider } from "@mantine/core";
import { ParallaxProvider } from "react-scroll-parallax";
import "@mantine/core/styles.css";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";

import "./App.css";

function App() {
    return (
        <ParallaxProvider>
            <MantineProvider>
                <BrowserRouter>
                    <Routes>

                        <Route path="/" element={<Home />} />

                        <Route element={<Layout />}>
                            <Route path="/about" element={<About />} />
                        </Route>

                    </Routes>
                </BrowserRouter>
            </MantineProvider>
        </ParallaxProvider>
    );
}

export default App
