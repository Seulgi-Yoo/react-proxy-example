import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import TodoTable from "./components/TodoTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import CreateTodo from "./components/CreateTodo";
import { getAllBooks, createBook } from "./services/BookService";
import { getAllTodos, createTodo } from "./services/TodoService";
import Footer from "./components/Footer";

function App() {
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [todoList, setTodoList] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
      setNumberBooks(data.length);
    });
  };

  const handleOnChangeBookForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === "book") {
      bookShelf.book = e.target.value;
    } else if (e.target.name === "category") {
      bookShelf.category = e.target.value;
    } else if (e.target.name === "author") {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };

  const handleTodoSubmit = () => {
    createTodo(todoList).then(() => {
      setNumberTodos(numberOfTodos + 1);
    });
  };

  const getAllTodo = () => {
    getAllTodos().then((data) => {
      console.log(data)
      setTodos(data);
      setNumberTodos(data.length);
    });
  };

  const handleOnChangeTodoForm = (e) => {
    let inputData = todoList;
    if (e.target.name === "todo") {
      todoList.todo = e.target.value;
    } else if (e.target.name === "category") {
      todoList.category = e.target.value;
    } else if (e.target.name === "isComplete") {
      todoList.isComplete = e.target.value ?  e.target.value : "Yes";
    }
    setTodoList(inputData);
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <div className="create-wrapper">
          <CreateBook
            bookShelf={bookShelf}
            onChangeForm={handleOnChangeBookForm}
            handleSubmit={handleSubmit}
          />
          <CreateTodo
            todoList={todoList}
            onChangeForm={handleOnChangeTodoForm}
            handleSubmit={handleTodoSubmit}
          />
        </div>
        <DisplayBoard
          numberOfBooks={numberOfBooks}
          getAllBook={getAllBook}
          numberOfTodos={numberOfTodos}
          getAllTodo={getAllTodo}
        />
        <div className="table-wrapper">
          <BookTable books={books} />
          <TodoTable todos={todos} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
