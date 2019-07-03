class GetFunctions{

  //Init class
  constructor(){
    //Create function object
    this.Functions = {

      /**
      * TOKEN CHECK EXAMPLE
        let CheckToken = function(Token){
          //Fetch file and its data
          let FileData    = fs.readFileSync("./Core/LoginData/UserData.json");
          let LoginDB     = JSON.parse(FileData);

          //Check if token exists
          let TokenE = false;
          for(var items in LoginDB){
            if(items == Token) TokenE = true;
          }

          return TokenE;

        }

        let Token = Request.body.Token;
      *
      **/

      //Indexes the entire back end
      "Index" : {
        "Path" : "/Api/Index",
        "Funct" : function(Request, Response){
          //First Verify token
          let fs = require('fs');

          //Build return object
          let ReturnObject = {
            "Success" : null,
            "Reason"  : null
          }

          try{
            let Index = fs.readFileSync("./Core/AppData/index.json");
            Response.end(Index);
          }
          catch(e){
            Response.end(e);
          }

          //Clear file system
          fs = null;
        }


      }, //End of indexx

      /******************************************
      *
      * MAP DATA
      *
      ******************************************/


      //Returns all of the Mapping data
      "MapData" : {
        "Path" : "/Api/Guides/Maps/",
        "Funct" : function(Request, Response){
          let ResponseData = {
            "MapTypes" : "/Api/Guides/Maps/MapTypes",
            "Maps" : "/Api/Guides/Maps/",
            "MapList" : "/Api/Guides/ListMaps/",
            "TypeList" : "/Api/Guides/ListMapTypes/"
          }


          Response.end(JSON.stringify(ResponseData));
        }
      },

      //Lists maps
      "MapList" : {
        "Path" : "/Api/Guides/ListMaps/",
        "Funct" : function(Request, Response){
          Response.end("['Hanamura','Horizon_Lunar_Colony','Paris','Temple_of_Anubis','Volskaya_Industries','Dorado','Junkertown','Rialto','Route_66','Watchpoint_Gibraltar','Blizzard_World','Eichenwalde','Hollywood','Kings_Row','Numbani','Busan','Ilios','Lijiang_Tower','Nepal','Oasis']");

        }
      },

      //Lists map types
      "MapTypeList" : {
        "Path" : "/Api/Guides/ListMapTypes/",
        "Funct" : function(Request, Response){
          Response.end("['Hybrid', '2CP', 'Payload', 'CP']");
        }
      },

      //Returns Guides on each map
      "MapGuides" : {
        "Path"  : "/Api/Guides/Maps/:Map",
        "Funct" : function(Request, Response){
          //Setup var
          let fs  = require("fs");
          let Map = Request.params.Map;
          let MapPool = ["Hanamura","Horizon_Lunar_Colony","Paris","Temple_of_Anubis","Volskaya_Industries","Dorado","Junkertown","Rialto","Route_66","Watchpoint_Gibraltar","Blizzard_World","Eichenwalde","Hollywood","Kings_Row","Numbani","Busan","Ilios","Lijiang_Tower","Nepal","Oasis"];
          let HasMap  = false;

          for(var items in MapPool){
            if(MapPool[items]  ==  Map) HasMap = true
          }

          //If user inputted right map, find map data
          if(HasMap){
            let MapData = fs.readFileSync("./Core/AppData/Guides/Maps/MapData/RawMapData/" + Map + ".json");

            fs = null;

            Response.end(MapData);
          }
          //If the map input isn't right
          else{
            fs = null;
            Response.end(JSON.stringify({
              "Success" : false,
              "Reason"  : "No map found"
            }));
          }


        }
      }, //End of map guides

      //Returns Guides on MapTypes
      "MapTypes" : {
        "Path"  : "/Api/Guides/MapTypes/:MapType",
        "Funct" : function(Request, Response){
          //Setup var
          let fs  = require("fs");
          let MapType = Request.params.MapType;
          let MapModes = ["Hybrid", "2CP", "Payload", "CP"];
          let HasMapMode  = false;

          for(var items in MapModes){
            if(MapModes[items]  ==  MapType) HasMapMode = true
          }

          //If user inputted right map, find map data
          if(HasMapMode){
            let MapData = fs.readFileSync("./Core/AppData/Guides/Maps/MapData/MapModes/" + MapType + ".json");

            fs = null;

            Response.end(MapData);
          }
          //If the map input isn't right
          else{
            fs = null;
            Response.end(JSON.stringify({
              "Success" : false,
              "Reason"  : "No map type found"
            }));
          }

        }
      } //End of map types


    }//End of function object


  }

}




module.exports = GetFunctions;
