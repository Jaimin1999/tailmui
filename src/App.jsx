import "./App.css";
import { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useSelector, useDispatch } from "react-redux";
import { counter } from "./ReduxStore/stateReducer";

function App() {
  const dispatch = useDispatch();

  const d = useSelector((state) => state.stateCounter.count);

  return (
    <div className="min-h-screen bg-red-100">
      <div className="container ">
        <h2 className="bg-yellow-500">Tailwindcss working</h2>
        <Button
          onClick={() => {
            dispatch(counter());
            console.log({ d });
          }}
          variant="contained"
          color="success"
          startIcon={<ChevronLeftRoundedIcon />}
        >
          Cick Me
        </Button>
      </div>
      <Box className="bg-purple-500">{d}</Box>
    </div>
  );
}

export default App;
