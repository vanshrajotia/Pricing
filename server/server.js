import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
    user : "postgres",
    host : "localhost",
    database : "world",
    password: "Vansh@2005",
    port : "3729",
});

const app = express();
const port = 3000;

db.connect();



db.query("SELECT * FROM pricing",(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log("Error executing query", err.stack);
    }
    db.end();
})