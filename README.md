# PocketCoachBE
Back end of Pocket Coach


# API DOCS
Here's some api documentation for the back end of PocketCoach. Most of the requests can be made through a http `POST` request and will return a JSON format.
## User Info

### Sign Up
To create a new user make a `POST` request to  `/Api/CreateUser`, containing the following request.
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
To login make a `POST` request to `/Api/Login`, containing the following request
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

# App Requests

#### NOTE
Some of the following requests will require a key

### Index
You can index the entire back end request system by making a `GET` request to `/Api/Index`.
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

### Guides - MapTypes
Making a get request to `/Api/Guides/MapTypes/MAPTYPE`, where `MAPTYPE` is your map type `(Hybrid, 2CP, Payload, CP)`, will return the guide data on that particular map type in a json format.

The request could return
```json
"Success" : false,
"Reason"  : "No map type found"
```
if the incorrect map type was entered.

### Guides - Maps
Making a get request to `/Api/Guides/Maps/MAP` where `MAP` is your map `(Hanamura, Horizon_Lunar_Colony, Paris, Temple_of_Anubis, Volskaya_Industries, Dorado, Junkertown, Rialto, Route_66, Watchpoint_Gibraltar, Blizzard_World, Eichenwalde, Hollywood, King's_Row, Numbani, Busan, Ilios, Lijiang_Tower, Nepal, Oasis)`, will return the guide data on that particular map in a json format.
