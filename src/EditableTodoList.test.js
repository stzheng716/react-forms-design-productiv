import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

it("EditableTodoList renders without crashing", function() {
    render(<EditableTodoList todos={[]} update={{}} remove={{}} />);
  });
  