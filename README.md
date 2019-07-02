# PocketCoachBE
Back end of Pocket Coach


##API DOCS
POST
###User Info
`/Api/CreateUser`
```
Request = {
  "Username" : USERNAME,
  "Password" : PASSWORD,
  "Email"    : EMAIL
}

Returns
{
  Success : "true"
  Key     : "YOURKEY"
}
or
{
  Success : false,
  Key   : null,
  Reason : string

}
```

`/Api/Login`
```

Request = {
  "Email"    : EMAIL,
  "Password" : PASSWORD
}

Returns

{
  Success : "true"
  Key     : "YOUR KEY"
}
or
{
  Success : false,
  Key   : null,
  Reason : string

}

```
