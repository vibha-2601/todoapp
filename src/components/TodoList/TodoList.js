import { Grid, IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

const TodoList = ({item}) => {
  return (
    <div>
      
        <TextField
          style={{ width: "60%" }}
          label="Name"
          placeholder="Item"
          variant="outlined"
          value={item}
        />
        <IconButton color="secondary">
          <DeleteOutlineIcon />
        </IconButton>

      
    </div>
  )
}

export default TodoList;
