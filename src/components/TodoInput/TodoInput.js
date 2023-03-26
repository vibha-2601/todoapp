import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const TodoInput = ({addToDo}) => {
  // state
  const [inputText, setInputText] = useState("");

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
          setInputText("");
        }}
      >
        +
      </Button>
    </div>
  );
};

export default TodoInput;
