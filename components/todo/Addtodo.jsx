import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { API_URL, axiosInstance } from "../../utils/axiosInstance";
import { useState, useEffect } from "react";

export default function BasicButtons() {
  const [todoData, setTodoData] = useState({ todo: ""});

  const handleChange = (event) => {
    setTodoData({...todoData,[event.target.name]: event.target.value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axiosInstance.post(`/todo`, todoData);
      console.log(result);

      if (result.data == "Please fill out the information completely.") {
        alert("Please fill out the information completely.");
      }
    } catch (err) {
      console.log(err.massage);
    }
  };

  return (
    <div className="addtodoform">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="todo"
          label="To do"
          variant="outlined"
          onChange={handleChange}
        />
        <div className="addtodo-btn">
          <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained">
            Add todo
          </Button>
        </Stack>
        </div>
        
      </Box>
    </div>
  );
}
