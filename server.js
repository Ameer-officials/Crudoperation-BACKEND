import  express  from "express";
import {connectToMongo} from './DB.js'
import bodyParser from "body-parser";
import {adminRouter} from "./routes/adminRoute.js"
import { userRouter } from "./routes/userRoute.js";



const app = express();
connectToMongo();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin" , adminRouter)
// app.use("/member" , memberRouter)
app.use("/member" , userRouter)


app.listen(5000, ()=>{
    console.log("Server running on port : http://localhost:5000" );
})