import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

let testTodo;

beforeEach(function () {
    testTodo = {
        id: 1,
        title: "testTodo", 
        description: "testing a todo", 
        priority: 1
    }
});

it("Todo renders without crashing", function () {
    render(<Todo todo={testTodo} />);
});

it("Test todo contains HTML of the todo", function () {
    const { container, debugg } =render(<Todo todo={testTodo} />);
    expect(container).toContainHTML("testing a todo")
    expect(container).toContainHTML("testTodo")
});