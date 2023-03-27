import {  IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

const TodoList = ({ item, index, deleteItem }) => {
  return (
    <div>
      <TextField
        style={{ width: "60%", paddingBottom: '10px' }}
        label="Name"
        placeholder="Item"
        variant="outlined"
        value={item}
      />
      <IconButton color="secondary" onClick={(e) => deleteItem(index)}>
        <DeleteOutlineIcon />
      </IconButton>
    </div>
  );
};

export default TodoList;
