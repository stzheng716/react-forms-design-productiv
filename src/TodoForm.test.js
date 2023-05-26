import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";


it("TodoForm renders without crashing", function() {
    render(<TodoForm handleSave={jest.fn} />);
  });
  
  