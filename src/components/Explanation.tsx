import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface ExplanationProps {
  title?: string;
  content?: string | JSX.Element;
  buttonLabel?: string;
  onConfirm: () => void;
}

const Explanation: React.FC<ExplanationProps> = ({
  title = "Explicación",
  content,
  buttonLabel = "Aceptar",
  onConfirm,
}) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography sx={{ mt: 2 }}>{content}</Typography>
      <Button variant="contained" sx={{ mt: 3 }} onClick={onConfirm}>
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default Explanation;
