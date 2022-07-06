const express = require('express')
const router = express.Router();
const mysql = require('mysql')
const bcrypt = require('bcryptjs')
const multer = require('multer')
const cors = require('cors')
const db = mysql.createPool({
  host: "207.180.243.8",
  user: "sc34mpr_adminSCMP",
  password: "db@SqlSCMP2021",
  database: "sc34mpr_SCMP",
  dateStrings: true,
});
/* const db = mysql.createPool({
  host: "localhost",
  user: "adminSCMP",
  password: "db@SqlSCMP2021",
  database: "sc34mpr_scmp",
  dateStrings: true,
  
}); */
function routes(app) {
  function byDate(a, b) {
    return new Date(b.EDate).valueOf() - new Date(a.EDate).valueOf();

  }
  const storage = multer.diskStorage({
    destination: (req, files, cb) => {
      cb(null, 'public/imgs/events')
    },
    filename: (req, files, cb) => {
  
      cb(null, files.originalname)
  
    }
  })
  
  var fileUpload = multer({ storage:storage,
    limits:{fileSize:150*1024*1024,
    fieldNameSize:200}
    })
    const multipleUpload = fileUpload.fields([{ name: 'coverPhoto', maxCount: 1 }, { name: 'innerPhotos', maxCount: 30 }])
    
    

  router.get("/Events", async (req, res) => {

    try {
      const sqlFetch = "SELECT * FROM `events` ORDER BY `EID` DESC";
      await db.query(sqlFetch, async (err, result) => {

        if (result) {
         
          result = result.sort(byDate)
         
          return res.send(result);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });


  router.get("/SWS", async (req, res) => {
    try {
      /* console.log('hello') */
      const sqlFetch = "SELECT * FROM `sws2022-carousel` ORDER BY 'id'";
      await db.query(sqlFetch, async (err, result) => {
        /* console.log(result) */
        return res.send(result);
      });
    } catch (error) {
      return res.send("not found");
    }
  });

  router.get("/formFS", async (req, res) => {
    try {
      /* console.log('hello') */
      const sqlFetch = "SELECT * FROM `FeasibilityStudyForm` ORDER BY 'Step'";
      await db.query(sqlFetch, async (err, result) => {
        /* console.log(result) */
        return res.send(result);
      });
    } catch (error) {
      return res.send("not found");
    }
  });

  router.get("/home", async (req, res) => {
    try {
  /* console.log('hello') */
      const sqlFetch = "SELECT * FROM `sws2022-carousel` ORDER BY 'id'";
      await db.query(sqlFetch, async (err, result) => {
        /* console.log(result) */
        return res.send(result);
      });
    } catch (error) {
      return res.send("not found");
    }
  });
  router.post("/AddU_SCMP", async (req, res) => {
    try {
      console.log(req.body)
      const { U_Name, U_Pass, admin } = req.body;
      const U_NameModified = U_Name.toLowerCase();
      const hash = await bcrypt.hash(U_Pass, 10);
      const UserInsert = "INSERT INTO `users` (`U_Name`, `U_Hash`,`admin`) VALUES (?,?,?)";
      await db.query(UserInsert, [U_NameModified, hash, admin], (err, result) => {
        console.log(err);
      });
  
      res.json('worked')
    } catch (error) {
      res.send("didn't work");
      // console.log(error);
    }
  
  });


  router.post("/SeperateEvent", async (req, res, err) => {
    const { EID } = req.body
  
    try {
      const sqlFetch = "SELECT * FROM events WHERE `EID`=(?)";
      await db.query(sqlFetch, [EID], async (err, result) => {
    
        if (err) {
          console.log(err)
          res.sendStatus(500);
        }
        else if (result.length === 0) {
        
          res.send("not found")
        }
        else {
          
          res.send(result);
        }
      });
    } catch (error) {
      
      console.log(error);
    }
  })


    
    
    router.post("/EventUpload", multipleUpload, async (req, res, err) => {
      console.log(req.files)
      if (!!req.files) {
    
        try {
          const { title, brief, paragraph, date,ELink } = req.body;
          console.log(req.body)
          const photoArray = []
          for (let i = 0; i < req.files.innerPhotos.length; i++) {
            photoArray.push(req.files.innerPhotos[i].originalname)
            
          }
          console.log(photoArray)
    
          const coverphoto = req.files.coverPhoto[0].originalname
          console.log(coverphoto)
          console.log("reached ")
          const UserInsert = "INSERT INTO `events` ( `ETitle`, `EBrief`, `EParagraph`, `EPhotos`, `ECover`, `EDate`, `ELink`) VALUES (?,?,?,?,?,?,?)";
    
          await db.query(UserInsert, [title, brief, paragraph, JSON.stringify(photoArray), coverphoto, date,ELink], (err, result) => {
            if (err) { console.log(err);
            res.sendStatus(401) }
            else { res.sendStatus(201); }
          });
    
        } catch (err) {
          console.log(err);
          res.send(401)
          ;
          // console.log(error);
        }
    
      }
      else{
        res.sendStatus(201)
      }
    
    }
    )
    
    router.post("/Login", async (req, res) => {
      try {
    
       /*  const  data = req.body;*/
        const { username, password }=req.body 
    
        const U_NameModified = username.toLowerCase().replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "");
        const sqlFetch = "SELECT * FROM `users` WHERE `U_Name`=(?)";
        await db.query(sqlFetch, [U_NameModified], async (err, result) => { 
          if (err) {
           
            res.send({ auth: "Network Error" }).status(501)
          }
          else if (result.length > 0) {
    
            if (result[0]) {
              const validPass = await bcrypt.compare(password, result[0].U_Hash);
    
              if (validPass) {
              
                if (result[0].auth==='normal') {
                 /*  const accessToken=createToken(result[0])
                  res.cookie("access-token",accessToken,{maxAge:60*60*2*1000}) */
                  res.send({ webmail: true, to: "http://207.180.243.8/webmail", auth:result[0].auth }).status(201)
    
                } else {
    
                  res.send({ webmail: false, auth: result[0].auth });
                }
    
    
              }
              else { res.send({ webmail: false, auth: false }).status(401) }
              ;
            }
          }
          else if (result.length == 0) {
            res.send({ webmail: false, auth: false }).status(401)
          }
        })
      }
      catch (err) {
        console.log(err)
      }
    })


  return router;
};

module.exports = routes;