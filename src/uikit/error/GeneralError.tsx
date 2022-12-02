import { Alert, AlertTitle } from "@mui/material";

type Props = {
  errorTitle: string;
  errorDescription: string;
};

function GeneralError({ errorTitle, errorDescription }: Props) {
  return (
    <Alert severity="error">
      <AlertTitle>{errorTitle}</AlertTitle>
      {errorDescription}
    </Alert>
  );
}

export default GeneralError;
