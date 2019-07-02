class PostFunctions{

  constructor(){
    //Create function object
    this.Functions = {

      "SignUp" : {
        "Path"  : "/Api/SignUp",
        "Funct" : function(Request, Response){
          //LIBS
          let fs = require("fs")
          //Import file
          let FileData    = fs.readFileSync("./Core/LoginData/UserData.json");

          //Write data to server
          let LoginDB     = JSON.parse(FileData);

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
              if(Email == LDB[items].Email) HasE = true;
            }

            return HasE;
          }
          let HasUserName = function(Username, LDB){
            let HasU = false;

            for(var items in LDB){
              if(Username == LDB[items].Username) HasU = true;
            }

            return HasU;
          }


          //Set up vars
          let UName      = Request.body.Username;
          let Pass       = Request.body.Password;
          let Email      = Request.body.Email;
          let ReturnFlag = {
            "Success" : "",
            "Key" : ""
          }


          //Check to see if username // email is taken
          let Taken       = false;
          let TakenString = "";

          if(HasEmail(Email, LoginDB)){
            console.log(Email)
            Taken = true;
            TakenString += "Email has already been added.";
          }

          if(HasUserName(UName, LoginDB)){
            Taken = true;
            TakenString += "Username has already been added.";
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
              "Email" : Email
            }

            //Write to file
            fs.writeFileSync("./Core/LoginServer/Data/UserData.json", JSON.stringify(LoginDB, null, 4));

            ReturnFlag.Success = true;
            ReturnFlag.Key     = Token;

          }
          else{
            ReturnFlag.Success = false;
            ReturnFlag.Key     = null;
            ReturnFlag.Reason  = TakenString;
          }

          fs = null;

          Response.end(JSON.stringify(ReturnFlag));

        }
      }, //END OF SIGNUP

      "Login" : {
        "Path"  : "/Api/Login",
        "Funct" : function(Request, Response){
          //LIBS
          let fs          = require("fs")
          //Import file
          let FileData    = fs.readFileSync("./Core/LoginServer/Data/UserData.json");

          //Setup vars
          let LoginDB     = JSON.parse(FileData)
          let Email       = Request.body.Email;
          let Password    = Request.body.Password;
          let Token       = null;

          //Check if the user info is correct
          for(var items in LoginDB){
            let UserBody = LoginDB[items];

            if( (UserBody.Email == Email) && (UserBody.Password == Password) ){
              Token = items;
            }

          }

          let ResponseObj = null;

          //IF login success, return such to user
          if(Token){
            ResponseObj = {
              "Success" : true,
              "Token"   : Token
            }

            Response.end(JSON.stringify(ResponseObj));

          }
          else{
            ResponseObj = {
              "Success" : false,
              "Token"   : null,
              "Reason"  : "Username or password was incorrect"
            }

            Response.end(JSON.stringify(ResponseObj));

          }

        }
      },// END OF LOGIN
      "Index" : {

        "Path" : "/Api/Index",
        "Funct" : function(Request, Response){
          //First Verify token
          let CheckToken = function(Token){
            //Fetch file and its data
            let FileData    = fs.readFileSync("./Core/LoginServer/Data/UserData.json");
            let LoginDB     = JSON.parse(FileData);

            //Check if token exists
            let TokenE = false;
            for(var items in LoginDB){
              if(items == Token) TokenE = true;
            }

            return TokenE;

          }

          //Build return object
          let ReturnObject = {
            "Success" : null,
            "Reason"  : null
          }

          if( (Token != null)  && (CheckToken(Token)) ){
            //Token Validated, return token
            let Index = json.parse(fs.readFileSync("./core/AppData/index.json"));
            for(var items in Index){
              console.log(items)
            }

          }else{

            ReturnObject.Reason  = "Token was not valid, double check request object.";
            ReturnObject.Success = false;

            Response.end(JSON.stringify(ReturnObject));
          }

        }


      } //End of indexx




    }//End of function object

  }

}


module.exports = PostFunctions;
