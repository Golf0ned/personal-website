import { useState } from "react";

import { AppShell, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
    return (
        <MantineProvider>
            <AppShell
                header={{ height: 60 }}
                padding="md"
            >
        
                <AppShell.Header>
                    <Navbar />
                </AppShell.Header>

                <AppShell.Main>
                    <div>Body</div>
                </AppShell.Main>

            </AppShell>
        </MantineProvider>
    );
}

export default App
