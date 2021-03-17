import React from "react";
import {waitFor, render, screen, fireEvent} from "@testing-library/react";

import Calculator from "../components/Calculator/Calculator";


describe("Calculator", () => {
    it("Renders a 9", () => {
        render(<Calculator/>);

        expect(screen.queryByText("9")).toBeInTheDocument();
    })

    it("inputs values to the result display", () => {
        render(<Calculator/>);

        fireEvent.click(screen.getByText("9"));
        fireEvent.click(screen.getByText("8"));

        expect(screen.queryByText("98")).toBeInTheDocument();
    })
});