import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Nepe = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Box mb={10}>
      {loading && (
        <Box mt={10}>
          <Typography variant="h4" align="center">
            Cargando...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Nepe;
