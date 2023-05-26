import React from "react";
import { render, fireEvent, toContainHTML } from "@testing-library/react";
import TodoApp from "./TodoApp";

let container, debug, title, description, priority, topTodo;

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

it("matches snapshot", function () {
    expect(container).toMatchSnapshot();
});

it("Test that todo(verify w/ title) isn't there, add it, verify it's there", function () {
    // Add a new todo
    expect(container).toContainHTML("You have no todos.")
    fireEvent.change(title, {target: { value: "test title" }});
    fireEvent.change(description, {target: { value: "test description" }});
    fireEvent.change(priority, {target: { value: 2 }});
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn"))

    // Verify new todo is added to TodoList
    expect(container).not.toContainHTML("You have no todos.");
    expect(container).toContainHTML("test title");
});

it("Test that todo(verify w/ title) IS there, delete, and verify absent", function () {
    // Add a new todo & verify added to TodoList
    expect(container).toContainHTML("You have no todos.")
    fireEvent.change(title, {target: { value: "test title" }});
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn")) // submit new todo
    expect(container).not.toContainHTML("You have no todos.")

    // Delete todo & verify TodoList is empty
    fireEvent.click(container.querySelector(".EditableTodo-delBtn"))
    expect(container).toContainHTML("You have no todos.")
});

it("Test that EDIT todo works", function () {
    // Add a new todo
    expect(container).toContainHTML("You have no todos.")
    fireEvent.change(title, {target: { value: "test title" }});
    fireEvent.change(description, {target: { value: "test description" }});
    fireEvent.change(priority, {target: { value: 2 }});
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn")) // added todo

    // Verify todo is added to TodoList
    expect(container).not.toContainHTML("You have no todos.");
    expect(container).toContainHTML("test title");

    // Edit todo
    fireEvent.click(container.querySelector(".EditableTodo-toggle")) // click edit btn
    expect(container).toContainHTML("<form"); // edit form appears
    title = container.querySelector("#newTodo-title");
    fireEvent.change(title, {target: { value: "edited title" }});
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn")) // save changes

    // Verify edits updated on TodoList
    expect(container).toContainHTML("edited title") // check for edited title
    expect(container).not.toContainHTML("test title");

});

it("Test TopTodo Added", function () {
    // Add a new todo
    expect(container).toContainHTML("You have no todos.")
    fireEvent.change(title, {target: { value: "test title" }});
    fireEvent.change(description, {target: { value: "test description" }});
    fireEvent.change(priority, {target: { value: 2 }});
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn")) // added todo

    // verify todo is added to TodoList
    expect(container).not.toContainHTML("You have no todos.");
    expect(container).toContainHTML("test title");

    // verify todo is added to topTodo component
    topTodo = container.querySelector("#topTodo");
    expect(topTodo).toContainHTML("test title");

});

it("Test TopTodo Deleted", function () {
    // Add a new todo
    expect(container).toContainHTML("You have no todos.")
    fireEvent.change(title, {target: { value: "test title" }});
    fireEvent.change(description, {target: { value: "test description" }});
    fireEvent.change(priority, {target: { value: 2 }});
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn")) // added todo

    // verify todo is added to TodoList & TopTodo
    expect(container).not.toContainHTML("You have no todos.");
    expect(container).toContainHTML("test title");
    topTodo = container.querySelector("#topTodo");
    expect(topTodo).toContainHTML("test title");

    // delete added todo
    fireEvent.click(container.querySelector(".EditableTodo-delBtn"))

    // verify todo is deleted from TodoList & TopTodo
    expect(container).toContainHTML("You have no todos.")
    expect(container).not.toContain(topTodo);

});

it("Test TopTodo Edited", function () {
    // Add a new todo
    expect(container).toContainHTML("You have no todos.")
    fireEvent.change(title, {target: { value: "test title" }});
    fireEvent.change(description, {target: { value: "test description" }});
    fireEvent.change(priority, {target: { value: 2 }});
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn")) // added todo

    // verify todo is added to TodoList & TopTodo
    expect(container).not.toContainHTML("You have no todos.");
    expect(container).toContainHTML("test title");
    topTodo = container.querySelector("#topTodo");
    expect(topTodo).toContainHTML("test title");

    // Edit todo from TodoList
    fireEvent.click(container.querySelector(".EditableTodo-toggle")) // click edit btn
    expect(container).toContainHTML("<form"); // edit form appears
    title = container.querySelector("#newTodo-title");
    fireEvent.change(title, {target: { value: "edited title" }});
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn")) // save changes

    // Verify edits are present in TodoList & TopTodo
    expect(container).toContainHTML("edited title"); // check for edited title
    expect(container).not.toContainHTML("test title");
    expect(topTodo).toContainHTML("edited title");

});

