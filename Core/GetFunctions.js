class GetFunctions{

  constructor(){
    //Create function object
    this.Functions = {

      "test" : {
        "Funct" : function(Request, Response){
          console.log("Test");
        },
        "Path" : "/GetTest"
      }

    }//End of function object


  }




modules.exports = GetFunctions;
