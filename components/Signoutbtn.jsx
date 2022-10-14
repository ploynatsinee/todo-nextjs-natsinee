import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Router from "next/router";

export default function Signoutbtn() {
  const handleClick = async (event) => {
    Router.push("/signout");
  };

  return (
    <div className="signout-btn">
      <Stack spacing={2} direction="row">
        <Button onClick={handleClick} type="submit" variant="contained">
          Sign out
        </Button>
      </Stack>
    </div>
  );
}
