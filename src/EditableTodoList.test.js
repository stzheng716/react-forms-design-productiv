import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

let testTodos;

beforeEach(function () {
    testTodos = [{
        id: 1,
        title: "testTodo1",
        description: "testing a todo1",
        priority: 1
    }, 
    {
        id: 2,
        title: "testTodo2",
        description: "testing a todo2",
        priority: 2
    }]
});

it("EditableTodoList renders without crashing", function() {
    render(<EditableTodoList todos={[]} update={{}} remove={{}} />);
  });

it("Test todos are rendering in EditableTodoList", function() {
    const {container, debug} = render(<EditableTodoList 
        todos={testTodos} 
        update={{}} 
        remove={{}}
    />);

        expect(container).toContainHTML("testTodo1")
        expect(container).toContainHTML("testTodo2")
});