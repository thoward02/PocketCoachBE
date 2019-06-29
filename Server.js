//Server.js

//Include get and post functions
const GetRequest = require("./Core/GetFunctions.js");
const PostRequest = require("./Core/PostFunctions.js");



//Express libs
const Express      = require("express");
const EApp         = Express();

//Parsing and applying parse
const BodyParse    = require('body-parser');
EApp.use(BodyParse.json());
EApp.use(BodyParse.urlencoded({ extended: true }));

class Server{

  //constructor
  constructor(Settings){

    this.Settings     = Settings;
    this.GetRequests  = new GetRequest();
    this.PostRequests = new PostRequest();


    this.HttpsServer  = Settings.https;


  }


  //Start
  Start(){

    //Build Get Requests
    for(var Requests in this.GetRequests){
      //Fetch our req handler
      let Req = this.GetRequests[Requests];

      //Add the request
      EApp.get(Req.Path, Req.Funct);

    }

    //Build Post requests
    for(var Requests in this.PostRequests){
      //Fetch our req handler
      let Req = this.PostRequests[Requests];

      //Add the request
      EApp.get(Req.Path, Req.Funct);

    }


    


  }


}

//Settings
const Settings = {
  "https"    : "127.0.0.1",
  "Internal" : "127.0.0.1"
}

//Creating
const APP = new Server(Settings);

//Start
APP.Start();
