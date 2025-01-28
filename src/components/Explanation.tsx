import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

interface ExplanationProps {
  explanation: string;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation }) => {
  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 600, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Explicación:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {explanation}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Explanation;
