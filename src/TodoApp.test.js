import React from "react";
import { render, fireEvent, toContainHTML } from "@testing-library/react";
import TodoApp from "./TodoApp";

let container, debug, title, description, priority

beforeEach(() => {
    const renderResult = render(<TodoApp />);
    container = renderResult.container
    debug = renderResult.debug

    title = container.querySelector("#newTodo-title")
    description = container.querySelector("#newTodo-description")
    priority = container.querySelector("#newTodo-priority")

})

it("TodoApp renders without crashing", function () {
    render(<TodoApp />);
});

it("Test that todo(verify w/ title) isn't there, add it, verify it's there", function () {

    expect(container).toContainHTML("You have no todos.")
    title.value = "test title"
    description.value = "test description"
    priority.value = "test priority"
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn"))
    expect(container).not.toContainHTML("You have no todos.")
});

it("Test that todo(verify w/ title) IS there, delete, and verify absent", function () {

    expect(container).toContainHTML("You have no todos.")
    title.value = "test title"
    description.value = "test description"
    priority.value = "test priority"
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn"))
    expect(container).not.toContainHTML("You have no todos.")
    fireEvent.click(container.querySelector(".EditableTodo-delBtn"))
    expect(container).toContainHTML("You have no todos.")
});

