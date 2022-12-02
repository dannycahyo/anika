import React from "react";
import { Backdrop, Alert, AlertTitle } from "@mui/material";
import GeneralError from "./GeneralError";

type Props = {
  condition: boolean;
};

namespace Caption {
  export const errorTitle = "Upps, Error";
  export const errorDesc =
    "There is something wrong with our system. Try Again Later";
}

function GeneralErrorModal({ condition }: Props) {
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
      <GeneralError
        errorTitle={Caption.errorTitle}
        errorDescription={Caption.errorDesc}
      />
    </Backdrop>
  );
}

export default GeneralErrorModal;
