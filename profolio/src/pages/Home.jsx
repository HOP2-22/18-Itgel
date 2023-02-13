import ResponsiveAppBar from "../components/Header";
import Footer from "../components/Footer";
import { Typography, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
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
          Sport (Favourite)
        </Typography>
        <Typography sx={{ maxWidth: "572.69px", maxHeight: "1464px" }}>
          Basketball and football are two of the most popular and widely played
          sports in the world. Both sports are enjoyed by millions of people of
          all ages and cultures, and both require a high level of athleticism,
          strategy, and teamwork. Despite their similarities, however, there are
          also several key differences between basketball and football.
          Basketball is a fast-paced, high-flying sport that is played on a hard
          court with a 10-foot-high hoop. The objective of basketball is to
          shoot the ball into the hoop and score as many points as possible. To
          play basketball, a player must have quick reflexes, strong
          coordination, and the ability to jump and maneuver in the air. The
          sport is characterized by its fast pace, high-flying acrobatics, and
          emphasis on individual skills such as dribbling, shooting, and
          passing. Football, on the other hand, is a more physically demanding
          sport that is played on a large, grassy field. The objective of
          football is to advance the ball into the opposing team's goal and
          score as many points as possible. To play football, a player must have
          good endurance, strong leg muscles, and the ability to dribble, pass,
          and shoot with both feet. Football is characterized by its focus on
          teamwork, strategy, and endurance, as well as its physical demands and
          fast-paced action. One of the biggest differences between basketball
          and football is the size of the playing field. Basketball is played on
          a much smaller court, while football is played on a much larger field.
          This affects the strategy and tactics used in each sport, as well as
          the type of athletes that are needed to play them. For example,
          basketball players need to be quick and agile, while football players
          need to be able to run and cover large distances. Another key
          difference between basketball and football is the style of play.
          Basketball is a more open and fast-paced game that allows players to
          move freely around the court. Football, on the other hand, is a more
          structured and controlled game that relies on precise formations and
          plays. This means that basketball is more improvisational, while
          football is more planned and strategic. Finally, there are also
          differences in the equipment and gear used in each sport. Basketball
          players wear lightweight shoes with good traction and little
          padding,them while football players wear cleats with longer studs to
          help maintain traction on the grassy field. In conclusion, while
          basketball and football are both exciting and popular sports, they
          offer different challenges and opportunities for athletes of different
          skill levels and styles. Whether you prefer the fast-paced action and
          individual skills of basketball, or the teamwork and strategy of
          football, both sports are sure to provide hours of fun and excitement.
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
  );
};
export default Home;
