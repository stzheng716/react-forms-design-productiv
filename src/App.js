import React from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

/** Site application.
 *
 * App -> TodoApp
 **/

function App() {
  return (
      <main className="App">
        <header className="container-fluid pt-4 pb-1">
          <div className="container">
            <h1>Prøductïv</h1>
            <p className="lead">The best name in todo list management.</p>
          </div>
        </header>

        <section className="container mt-4">
          <TodoApp initialTodos={[
            {
              id: 5,
              title: "TopTodo updates after deleting current TopTodo",
              description: "Test that TopTodo present, delete top, and verify different todo is new Top",
              priority: 3,
            },
            {
              id: 6,
              title: "Clicking Edit Button",
              description: "Test that edit form not present, simulate click edit button, verify edit form present",
              priority: 3,
            }
          ]} />

          <Footer />
        </section>
      </main>
  );
}

export default App;
