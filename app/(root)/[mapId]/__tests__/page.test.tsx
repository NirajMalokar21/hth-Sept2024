import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

describe("Home component", () => {
    it('renders the "Hello, World!" text', () => {
        // Render the Home component
        render(<Home />);

        // Query the DOM for the text "Hello, World!"
        const headingElement = screen.getByText(/Hello, World!/i);

        // Check if it is in the document
        expect(headingElement).toBeInTheDocument();
    });
});
