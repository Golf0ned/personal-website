import { BrowserRouter, Routes, Route } from "react-router";

import { AppShell, MantineProvider } from "@mantine/core";
import { ParallaxProvider } from "react-scroll-parallax";
import "@mantine/core/styles.css";

import Layout from "./components/Layout";
import Page from "./components/Page";

import Home from "./components/Home";
import About from "./components/About";

import "./App.css";

function App() {
    return (
        <ParallaxProvider>
            <MantineProvider>
                <BrowserRouter>
                    <Routes>

                        <Route
                            title="Home | Benjamin Ye"
                            path="/"
                            element={
                                <Page title="Home | Benjamin Ye">
                                    <Home />
                                </Page>
                            }
                        />

                        <Route element={<Layout />}>
                            <Route
                                path="/about"
                                element={
                                    <Page title="About | Benjamin Ye">
                                        <About />
                                    </Page>
                                }
                            />
                        </Route>

                    </Routes>
                </BrowserRouter>
            </MantineProvider>
        </ParallaxProvider>
    );
}

export default App
