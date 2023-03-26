import { Grid, IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

const TodoList = () => {
  return (
    <div>
      <Grid item md={3} >
        <TextField 
        style={{width: "60%" }}
          label="Name"
          placeholder="Item"
          variant="outlined"
        />
        <IconButton color="secondary">
          <DeleteOutlineIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default TodoList;
