const express = require("express");
const next = require("next");
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors({
      credentials: true,
      origin: '*' ,
    }));
    
    server.use(cookieParser());
    server.use(bodyParser.urlencoded({extended: true , limit:'150mb'}));
    server.use(bodyParser.json({limit:'150mb'}));
    const routes = require("./routes/index.js");

    server.use("/api", routes(server));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });