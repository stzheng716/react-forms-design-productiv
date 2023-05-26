import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TopTodo from "./TopTodo";

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

it("TopTodo renders without crashing", function () {
    render(<TopTodo todos={testTodos} />);
});
