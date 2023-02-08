import ResponsiveAppBar from "../components/Header";
import Footer from "../components/Footer";
import { Typography, Box, Container } from "@mui/material";
import img from "../img/hho.png";
const Home = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container>
        <Typography
          sx={{
            border: "0.1px solid black",
            borderRadius: "5px",
            maxWidth: "572px",
            textAlign: "center",
          }}
        >
          Hello, I'm an Mongolian app developer based in Mongolia!
        </Typography>
        <Typography variant="h3">Итгэл Бат-Эрдэнэ</Typography>
        <Typography>
          Digital Craftsman ( Videogames / Developer / Student )
        </Typography>
        <img src={img} alt="dusb"></img>
      </Container>

      <Footer />
    </Box>
  );
};
export default Home;
