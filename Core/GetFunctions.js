class GetFunctions{

  //Init class
  constructor(){
    //Create function object
    this.Functions = {

      //For testing
      "MapGuides" : {
        "Path"  : "/Api/Guides/Maps/:Map",
        "Funct" : function(Request, Response){
          //Setup var
          let fs  = require("fs");
          let Map = Request.params.Map;
          let MapPool = ["Hanamura","Horizon_Lunar_Colony","Paris","Temple_of_Anubis","Volskaya_Industries","Dorado","Junkertown","Rialto","Route_66","Watchpoint_Gibraltar","Blizzard_World","Eichenwalde","Hollywood","King's_Row","Numbani","Busan","Ilios","Lijiang_Tower","Nepal","Oasis"];
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
      },
      "MapTypes" : {
        "Path"  : "/Api/Guides/MapTypes/:MapType",
        "Funct" : function(Request, Response){
          //Setup var
          let fs  = require("fs");
          let Map = Request.params.Map;
          let MapModes = ["Hybrid", "2CP", "Payload", "CP"];
          let HasMapMode  = false;

          for(var items in MapMode){
            if(MapMode[items]  ==  Map) HasMapMode = true
          }

          //If user inputted right map, find map data
          if(HasMapMode){
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
      }


    }//End of function object


  }

}




module.exports = GetFunctions;
