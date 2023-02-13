import Footer from "../components/Footer";
import { Typography, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../img/hho.png";
import ResponsiveAppBar from "../components/Header";

const Home = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container sx={{ marginTop: "68.5px" }}>
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
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box>
              {" "}
              <Typography variant="h3">Итгэл Бат-Эрдэнэ</Typography>
              <Typography>
                Digital Craftsman (Videogames / Developer / Student)
              </Typography>
            </Box>
            <img
              style={{
                borderRadius: "50%",
                maxHeight: "100px",
                maxWidth: "96px",
              }}
              src={img}
              alt="dusb"
            ></img>
          </Box>
          <Typography sx={{ textDecoration: "underline" }} variant="h5">
            Favourite sport player
          </Typography>
          <Typography sx={{ maxWidth: "572.69px", maxHeight: "1464px" }}>
            In the Premier League, Eden Hazard was considered one of the top
            players and had a successful career with Chelsea. He was named the
            Premier League Player of the Season in 2014-15 and was a key player
            for Chelsea during their Premier League-winning seasons. Hazard's
            skill and creativity on the pitch made him one of the most exciting
            players to watch, and he was highly regarded by fans and analysts
            alike. As of my knowledge cut-off in 2021, Eden Hazard had scored a
            total of 110 goals in his club career in the top-tier leagues of
            Belgium, France, and England. He scored 36 goals in the Belgian Pro
            League for Lille, 38 goals in Ligue 1 for Lille and Paris
            Saint-Germain, and 36 goals in the Premier League for Chelsea.
            Additionally, Hazard has scored 19 goals for the Belgium national
            team. These statistics are subject to change as Hazard continues his
            career.
          </Typography>
          <Link to="/MyProfolio">
            <Button>MyProfolio</Button>
          </Link>
          <Typography sx={{ textDecoration: "underline" }} variant="h5">
            Bio
          </Typography>
          <Typography>2007 Born in New York, America</Typography>
          <Typography>
            2010 Completed KinderGarden (was only there for one week)
          </Typography>
          <Typography>2018 Completed Elementery School at ЕБУС</Typography>
          <Typography>2022 Completed Middle School at ЕБУС</Typography>
          <Typography>
            2022-present Studying at New Mongol Institute of Technology
          </Typography>
          <Typography sx={{ textDecoration: "underline" }} variant="h5">
            I♥
          </Typography>
          <Typography>
            Video Games, Music, Sports=football baketball, Chess
          </Typography>
          <Typography sx={{ textDecoration: "underline" }} variant="h5">
            On The Web
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "236.64px",
            }}
          >
            <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              @Craftzdog GitHub
            </Button>
            <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              @inkdrop_app Twitter
            </Button>
            <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              @craftzdog Twitter
            </Button>
            <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              @craftzdog Instagram
            </Button>
          </Box>
        </Container>
        <Footer />
      </Box>
    </Container>
  );
};
export default Home;
