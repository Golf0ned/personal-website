import { BrowserRouter, Routes, Route } from "react-router";

import { createTheme, MantineProvider, rem } from "@mantine/core";
import { ParallaxProvider } from "react-scroll-parallax";
import "@mantine/core/styles.css";

import Layout from "./components/Layout";
import Page from "./components/Page";

import Home from "./components/Home";
import About from "./components/About";

import "./App.css";


const theme = createTheme({
    fontSizes: {
        xs: rem(11),
        sm: rem(14),
        md: rem(18),
        lg: rem(24),
        xl: rem(28),
    },
});

function App() {
    return (
        <ParallaxProvider>
            <MantineProvider theme={theme}>
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
