import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const initial_url =
    "https://images.unsplash.com/photo-1638905132201-532d10903ea1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwY2xvdWRlfGVufDB8fDB8fHww";

  const hot_url =
    "https://images.unsplash.com/photo-1480589331144-96c57ade5d41?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold_url =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rain_Url =
    "https://images.unsplash.com/photo-1601116780524-a186c597a6fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="inifobox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humodity > 80
                ? rain_Url
                : info.tepm > 20
                ? hot_url
                : cold_url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <div>Temprature - {info.tepm}&deg;C</div>
              <div>Humodity - {info.humodity}</div>
              <div>Min Temp - {info.tempMin}&deg;C</div>
              <div>Max Temp - {info.tempMax}&deg;C</div>
              <div>
                The weather can be describe asi <i>{info.weather}</i> and feels
                like - {info.feelsLikes}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
