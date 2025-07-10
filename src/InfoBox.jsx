import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ShowerIcon from '@mui/icons-material/Shower';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export default function InfoBox({info}){

    const init_img="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let hot_url="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_url="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain_url="https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
           
           <div className="cardCont">
                 <Card sx={{ maxWidth: 345 }}>
                
                <CardMedia
                component="img"
                height="140"
                image={info.humidity > 80 ? rain_url 
                    : info.temp > 15
                    ? hot_url
                    :cold_url
                }       
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <b className='CITY'>{info.city}</b> &nbsp;&nbsp;&nbsp;
                 {info.humidity > 80 ? <ShowerIcon/> 
                    : info.temp > 15
                    ? <WbSunnyIcon/>
                    :<AcUnitIcon/>
                }     

                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <div className="cardCont">
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>
                    The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C
                </p>
                </div>
                </Typography>
                </CardContent>


                </Card>
           </div>

        </div>
    )
}
