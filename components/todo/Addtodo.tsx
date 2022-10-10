import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { useEffect, useState } from 'react'

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" >
      <Button variant="contained">Add todo</Button>
    </Stack>
  );
}
