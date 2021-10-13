import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./sass/todo.css";
import Todo from "./components/Todo";
// import Card from "./Card";
const App =()=>{
        return(
            <>
              <h1 className="text-center p-4 text-uppercase"> To do List</h1>  
            <Todo />
            </>
        );
}

export default App;