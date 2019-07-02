# PocketCoachBE
Back end of Pocket Coach


# API DOCS
Here's some api documentation for the back end of PocketCoach. Most of the requests can be made through a http POST request and will return a JSON format.
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
You can index the entire back end request system by calling `/Api/Index`.
It will return a JSON object holding every request you could make towards the back end system.

The request would look like
```json
{
  "Key" : "YOURKEY"
}
```

and the return would be either an object of data or a failure tag:
```json
{
  "Success" : false,
  "Reason"  : "string"
}
```
