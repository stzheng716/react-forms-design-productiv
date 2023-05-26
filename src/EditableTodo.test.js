import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";



it("EditableTodo renders without crashing", function () {
    render(<EditableTodo todo={{}} update={{}} remove={{}} />);
});