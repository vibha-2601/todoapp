import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const TodoInput = () => {
  // state
  const [inputText, setInputText] = useState("");

  // data
  const [todoList, setTodoList] = useState([]);

  // add functionality
  let addToDo = (inputText) => {
    setTodoList([...todoList, inputText]);
    setInputText("");
  };

  return (
    // input text
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        style={{ padding: 10, margin: "5px", width: "50%" }}
        id="filled-basic"
        label="Input Text"
        variant="filled"
        value={inputText}
        placeholder="Enter your todo"
        onChange={(e) => setInputText(e.target.value)}
      />

      {/* add button */}
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          addToDo(inputText);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default TodoInput;
