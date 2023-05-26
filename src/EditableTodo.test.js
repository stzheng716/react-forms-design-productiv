import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

let testTodo, updateMock, removeMock;

beforeEach(function () {
    testTodo = {
        id: 1,
        title: "testTodo", 
        description: "testing a todo", 
        priority: 1
    }

    updateMock = jest.fn()
    removeMock = jest.fn()
    updateMock.mockClear()
    removeMock.mockClear()
});

it("EditableTodo renders without crashing", function () {
    render(<EditableTodo todo={{}} update={{}} remove={{}} />);
});

it("test clicking on delete button invokes remove func", function () {

    const {container, debug} = render(
    <EditableTodo 
        todo={testTodo} 
        update={updateMock} 
        remove={removeMock} />);
    
    fireEvent.click(container.querySelector(".EditableTodo-delBtn"))
    expect(removeMock).toHaveBeenCalledTimes(1);
    expect(updateMock).toHaveBeenCalledTimes(0);
});

it("test clicking on edit button; saving invokes update function", function () {

    const {container, debug} = render(
    <EditableTodo 
        todo={testTodo} 
        update={updateMock} 
        remove={removeMock} />);
    
    fireEvent.click(container.querySelector(".EditableTodo-toggle"))
    fireEvent.submit(container.querySelector(".NewTodoForm-addBtn"))
    expect(removeMock).toHaveBeenCalledTimes(0);
    expect(updateMock).toHaveBeenCalledTimes(1);
});

