# PocketCoachBE
Back end of Pocket Coach


## API DOCS
POST
### User Info
`/Api/CreateUser`
```json
"Request" = {
  "Username" : "USERNAME",
  "Password" : "PASSWORD",
  "Email"    : "EMAIL"
}

Returns

{
  "Success" : true,
  "Key"     : "YOURKEY"
}

if true or

{
  "Success" : false,
  "Key"   : null,
  "Reason" : "string"
}

if false

```

`/Api/Login`
```json

Request = {
  "Email"    : "EMAIL",
  "Password" : "PASSWORD"
}

Returns

{
  "Success" : true,
  "Key"     : "YOUR KEY"
}
or
{
  "Success" : false,
  "Key"   : null,
  "Reason" : "string"

}

```
