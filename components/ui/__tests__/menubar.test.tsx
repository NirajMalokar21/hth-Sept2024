import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menubar } from "../menubar";

describe("MenuBar Component", () => {
    it("It is a menu bar!", () => {
        // Render the Home component
        render(<Menubar />);

        // Query the DOM for the text "Hello, World!"
        const headingElement = screen.getByText(/MenuBar/i);

        // Check if it is in the document
        expect(headingElement).toBeInTheDocument();
    });
});
