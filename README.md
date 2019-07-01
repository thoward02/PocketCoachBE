# PocketCoachBE
Back end of Pocket Coach


#API DOCS
  POST
  /Api/CreateUser

  Request = {
    "Username" : USERNAME,
    "Password" : PASSWORD,
    "Email"    : EMAIL
  }

  Returns
  {
    Success : "true"
    Key     : ""
  }
  or
  {
    Success : "false",
    "Key"   : null
  }
