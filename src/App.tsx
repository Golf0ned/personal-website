import { BrowserRouter, Routes, Route } from "react-router";

import { createTheme, MantineProvider, rem } from "@mantine/core";
import "@mantine/core/styles.css";

import Layout from "./components/Layout";
import Page from "./components/Page";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog/Landing";
import BlogPage from "./components/Blog/Posts";

import { posts } from "./data/blog";

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
    const blogPosts = posts.map((post: BlogPost) => (
        <Route
            path={`/blog/${post.slug}`}
            element={
                <Page title={`${post.title} | Benjamin Ye`}>
                    <BlogPage
                        title={post.title}
                        date={post.date}
                    />
                </Page>
            }
        />
    ));

    return (
        <MantineProvider
            theme={theme}
            forceColorScheme="dark"
        >
            <BrowserRouter>
                <Routes>

                    <Route
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
                        <Route
                            path="/projects"
                            element={
                                <Page title="Projects | Benjamin Ye">
                                    <Projects />
                                </Page>
                            }
                        />
                        <Route
                            path="/blog"
                            element={
                                <Page title="Blog | Benjamin Ye">
                                    <Blog />
                                </Page>
                            }
                        />
                        {blogPosts}
                    </Route>

                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App
