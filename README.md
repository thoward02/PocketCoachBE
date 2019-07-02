# PocketCoachBE
Back end of Pocket Coach


# API DOCS
POST
## User Info

### Sign Up
To create a new user make a POST request to  `/Api/CreateUser`, containing the following request.
```json
"Request" = {
  "Username" : "USERNAME",
  "Password" : "PASSWORD",
  "Email"    : "EMAIL"
}
```
It will return a
```json
{
  "Success" : true,
  "Key"     : "YOURKEY"
}
```
if creating the new user succeeded or a
```json
{
  "Success" : false,
  "Key"   : null,
  "Reason" : "string"
}
```
If creating the new user failed

### Login
To login make a POST request to `/Api/Login`, containing the following request
```json
Request = {
  "Email"    : "EMAIL",
  "Password" : "PASSWORD"
}
```
If the login succeeded it will return a
```json
{
  "Success" : true,
  "Key"     : "YOUR KEY"
}
```
and if it failed it will return a
```json
{
  "Success" : false,
  "Key"   : null,
  "Reason" : "string"

}
```

## App Requests

#### NOTE
For the following Request requires `Key` which is the api key given to you upon successful login.

### Index
