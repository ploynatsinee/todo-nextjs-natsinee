import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { API_URL, axiosInstance } from "../../utils/axiosInstance";
import { useState, useEffect } from "react";

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const [todos, setTodos] = React.useState([]);
  
  const handleDelete = async (index) => {  
    try {
      let userid = new URLSearchParams(window.location.search).get("users_id");
      const result = await axiosInstance.delete(`/todo/?users_id=${userid}`);
      console.log(result);
      setTodos(todos.filter((todo) => todo.index !== index));
    } catch (err) {
      console.log(err.massage);
    }
  };

  //handleUpdate un finish
  const handleUpdate = async (id) => {
    try {
      let userid = new URLSearchParams(window.location.search).get("users_id");
      const result = await axiosInstance.put(`/todo/?users_id=${userid}`);
      // console.log(result);
    } catch (err) {
      console.log(err.massage);
    }
  };

  useEffect(() => {
    let userid = new URLSearchParams(window.location.search).get("users_id");
    // console.log(userid);
    axiosInstance
      .get(`/todo/?users_id=${userid}`)
      .then((results) => {
        setTodos(results.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todos]);
  // console.log(todos);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo, index) => {
        // console.log(index)
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                {/* <CommentIcon /> */}
                <DeleteIcon onClick={()=>{handleDelete(index)}}/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={todo.todo} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
