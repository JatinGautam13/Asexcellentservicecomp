const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookingRoutes = require('./routes/bookingRoutes');
const helpRoutes = require('./routes/helpRoutes');
// import path from "path";
require('dotenv').config();


const app = express();

// const _dirname= path.resolve();
app.use(cors({
    origin: 'http://localhost:5173' // Or 'http://localhost:3000' if you use CRA
}));
app.use(express.json());

// Remove useNewUrlParser and useUnifiedTopology
mongoose.connect('mongodb://127.0.0.1:27017/housekeeping') // Just the connection string
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    });

app.use('/api/bookings', bookingRoutes);

app.use('/api/help-requests', helpRoutes);
// app.use(express.static(path.join(_dirname, "/frontend/dist")))
// app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(_dirname, "/frontend/dist","index.html"));
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});