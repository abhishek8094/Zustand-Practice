import { Box, Typography, Button, TextField } from "@mui/material";
import { useColor } from "../store/color";

const UseZustand = () => {
  const { text, color, setText, setColor } = useColor();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    if (text !== color) {
      setColor(text);
    }

  };

  return (
    <Box className="container">
      <Typography variant="h4" sx={{ color }}>
        State Management using Zustand
      </Typography>
      <br />
      <Box className="input-box">
        <TextField
          variant="outlined"
          className="input-field"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter color"
        />
        <Button className="btn" variant="contained" onClick={handleButtonClick}>
          Change Color
        </Button>
      </Box>
    </Box>
  );
};

export default UseZustand;
