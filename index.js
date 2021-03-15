const express = require("express");
const _ = require("lodash");
const axios = require("axios");
const path = require("path");
const fse = require("fs-extra");

//https://soundimage.org/attribution-info/
//https://www.serpentsoundstudios.com/royalty-free-music/celtic-fantasy

const port = 8080;

let app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/public",express.static('public'));

const imageSearch = `https://serpapi.com/search.json?engine=google&q=dinosaur+dnd&google_domain=google.com&gl=us&hl=en&tbm=isch&gRecaptchaResponse=03AGdBq26s0ozczlEJtWo7iRWJoIFwCUAp9A1Q8M-p1fNGbNvjhrNIqeIYXLVCBlH9-8hYxDSpTcFV_hwFRxIwDY69Qn7DLiaEWfZBU97ftAbNdYr5NyjZZC_Xm95dgrff707sTUVzqMTLGINszVsq-IjMBsx8NLnSouDZh9F0yHPzmZ9bj9LqbcI-fMLv6XuPBnTaiBNCTaUSEMMjURwujpm9GXF7xKXCBQzP6gEha-r-NKnFYA5o0XgfSWEGWTBkjS-cPZrP3g8jxaUbmj-kgNhEiHGbW_Y8S3x-7UGmWD-2_2C10tQzBsbnM7itYz4o3aHhmdh61KVmR58EGIx17rvuEVx55IX2MuSx6iPX5TIiohmQotkWumIbatEAACUj44ucaHz-MrkOhDAx8UXnfeuQtfZvMs1KOHWvxM0KMFJczQ-UdDZiEv4Lud4Io-RSwKGWO1wBIKL4`;

const players = [
  {
    name:"Tireth",
    icons:["Class Icon - Druid.svg"],
  },
  {
    name:"Frej",
    icons:["Class Icon - Fighter.svg"],
  },
  {
    name:"Dr Gorp",
    icons:["Class Icon - Sorcerer.svg"],
  },
  {
    name:"Root",
    icons:["Class Icon - Warlock.svg"],
  },
  {
    name:"Zin",
    icons:["Class Icon - Monk.svg"],
  },
  {
    name:"[NPCs]",
    icons:["Adventurers League Icon - 09 Descent into Avernus.svg"],
  },
]

app.get("/", async (req, res) => {
    const songs = _.map(await fse.readdir("./public/music"),(s) => `public/music/${s}`);
    res.render("index",{players,songs});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
