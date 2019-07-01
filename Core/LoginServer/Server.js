//Server.js

//FS LIB
const fs = require("fs");

//Express libs
const Express      = require("express");
const EApp         = Express();

//Parsing and applying parse
const BodyParse    = require('body-parser');
EApp.use(BodyParse.json());
EApp.use(BodyParse.urlencoded({ extended: true }));


class LoginServer{

  constructor(){
    //Hosting Data
    this.IP   = "127.0.0.1"; // We only want to host on local host
    this.PORT = "830";


  }

  //Starting point
  Start(){
    //Setup listeners
    this.SetupPostRequests();

    //Start Server
    EApp.listen(this.PORT, this.IP, function(){
      //Listening
      console.log("STARTED...");


    });

  }

  //REQUESTS
  SetupPostRequests(){

    EApp.post("/Api/Login/", function(Request, Response){

      console.log(Request.body)

    });


    EApp.post("/Api/CreateUser/", function(Request, Response){
      //Import file
      let FileData = fs.readFileSync("./Core/LoginServer/Data/UserData.json");

      //Write data to server
      let LoginDB = JSON.parse(FileData);

      let CreateToken = function(BITS){
        //Set up vars
        let ReturnKey = "";
        let Symbols = "123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz{}:<>.,/?';][|-=]";

        //Compute
        for(var x = 0; x < BITS; x++){

          let RandomNum = Math.floor(Math.random() * 88);
          ReturnKey += Symbols[RandomNum];

        }

        return ReturnKey;
      }
      let isToken     = function(Token, LDB){
        let ISTOKEN = false;
        for(var items in LDB){
          if(items == Token) ISTOKEN = true;
        }
        return ISTOKEN;
      }
      let HasEmail    = function(Email, LDB){
        let HasE = false;

        for(var items in LDB){
          if(Email == LoginDB[items].Email) HasE = true;
        }

        return HasE;
      }
      let HasUserName = function(Username){
        let HasU = false;

        for(var items in LoginDB){
          if(Username == LoginDB[items].Username) HasU = true;
        }

        return HasU;
      }


      //Set up vars
      let UName = Request.body.Username;
      let Pass  = Request.body.Password;
      let Email = Request.body.Email;
      let ReturnFlag = {
        "Success" : "",
        "Key" : ""
      }


      //Check to see if username // email is taken
      let Taken = false;
      let TakenString = "";

      if(HasEmail(Email, LoginDB)){
        Taken = true;
        TakenString += "Email has already been added.";
      }

      if(HasUserName(UName, LoginDB)){
        Taken = true;
        TakenString += "Email has already been added.";
      }


      if(!Taken){
        //Construct a new token
        let Token = CreateToken(32);

        while(isToken(Token, LoginDB)){
          Token = CreateToken(32);
        }

        //// TODO: WRITE EMAIL VERF...

        //Write to json
        LoginDB[Token] = {
          "Username"  : UName,
          "Password"  : Pass,
          "Email" : Emailg
        }

        //Write to file
        fs.writeFileSync("./Core/LoginServer/Data/UserData.json", JSON.stringify(LoginDB, null, 4));

        ReturnFlag.Success = true;
        ReturnFlag.Key     = Token;

      }
      else{
        ReturnFlag.Success = false;
        ReturnFlag.Key     = null;
      }

      Response.end(JSON.stringify(ReturnFlag));


    });



  }



}




const APP = new LoginServer();

APP.Start();
