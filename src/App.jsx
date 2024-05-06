import "./App.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronRightRounded";
function App() {
  return (
    <div className="min-h-screen bg-red-100">
      <div className="container ">
        <h2 className="bg-yellow-500">Tailwindcss working</h2>
        <Button
          onClick={() => alert("Lets")}
          variant="contained"
          color="success"
          startIcon={<ChevronLeftRoundedIcon />}
        >
          Cick Me
        </Button>
      </div>
      <Box className="bg-purple-500">Hello</Box>
    </div>
  );
}

export default App;
