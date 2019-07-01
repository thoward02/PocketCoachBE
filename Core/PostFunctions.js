const axios = require("axios");
class PostFunctions{

  constructor(){
    //Create function object
    this.Functions = {

      "Login" : {
        "Path" : "/Login",
        "Funct" : function(Request, Response){


          axios.post('http://127.0.0.1:830/Api/CreateUser', {
              Username: Request.body.Username,
              Password: Request.body.Password,
              Email:    Request.body.Email
            })
            .then(function (response) {
              console.log(response.data + "\nData");
            })
            .catch(function (error) {
              console.log(error + "\nERR");
            });



        }

      }

    }//End of function object

  }

}


module.exports = PostFunctions;
