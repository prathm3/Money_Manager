import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { AddNewTransaction } from "./AddNewTransaction";

function Choice() {
  const [income, setIncome] = useState(false);
  return (
    <div className="mt-5 ">
      <Box display="flex" justifyContent="space-evenly" sx={{ ml: 10, mr: 10 }}>
        <Button variant="contained" onClick={() => setIncome(true)}>
          Income
        </Button>
        <Button variant="contained" onClick={() => setIncome(false)}>
          Expense
        </Button>
      </Box>
      <div className="justify-content-center">
        <AddNewTransaction income={income} />
      </div>
    </div>
  );
}

export default Choice;
