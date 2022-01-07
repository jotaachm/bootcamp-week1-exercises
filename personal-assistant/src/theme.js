import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        powderWhite: "#FFFDF9",
        lightGray: "#EEEEEE",
        strongCyan: "#00ADB5",
        bluishGray: "#393e46",
        bluishBlack: "#222831",
        persianGreen: "#06B49A",
        lightGreen: "#AFDBD2",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;