import { Box, Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Header from "@uikit/layout/Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Box>
      <Box sx={{ p: 1.5, backgroundColor: lightBlue[600] }}>
        <Container maxWidth="lg">
          <Header />
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box>{children}</Box>
      </Container>
    </Box>
  );
}

export default Layout;
