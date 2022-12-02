import React from "react";
import { Backdrop, Alert, AlertTitle } from "@mui/material";

type Props = {
  condition: boolean;
};

namespace Caption {
  export const errorTitle = "Upps, Error";
  export const errorDesc =
    "There is something wrong with our system. Try Again Later";
}

function GeneralError({ condition }: Props) {
  const [isOpen, setIsOpen] = React.useState(condition);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
      onClick={handleClose}
    >
      <Alert severity="error">
        <AlertTitle>{Caption.errorTitle}</AlertTitle>
        {Caption.errorDesc}
      </Alert>
    </Backdrop>
  );
}

export default GeneralError;
