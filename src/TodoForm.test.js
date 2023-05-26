import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";



it("TodoForm renders without crashing", function() {
    render(<TodoForm handleSave={{}} />);
  });


it("Test that the TodoForm renders form with proper labels", function() {
    const {container, debug} = render(<TodoForm handleSave={{}} />);
    expect(container).toContainHTML("Title")
    expect(container).toContainHTML("Description")
    expect(container).toContainHTML("Priority")
});