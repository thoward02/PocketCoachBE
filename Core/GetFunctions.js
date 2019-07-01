class GetFunctions{

  //Init class
  constructor(){
    //Create function object
    this.Functions = {

      //For testing
      "Test" : {
        "Path" : "/GetTest",
        "Funct" : function(Request, Response){

          console.log("Test");

          Response.end("OWO");

        }


      }

    }//End of function object


  }

}




module.exports = GetFunctions;
