# Mani Recruits and Training API
## Built by Ronald Kelechi

 Mongo Database: Atlas <br>
React Frontend: *Hosting*: Truehost and *Domain*: Truehost <br>
Node API:  *Hosting*: Render and *Domain:* Render

ROUTES AND THEIR RESPONSES AND MEANING

| ROUTE | REQUIRES | OUTPUT(MEANING)|
|---|---|---|
|/api/signup|email <br> password | successful(200) <br> error(500)|
|/api/signup/:email/2|email <br> password | successful(200) <br> error(500)|
|/api/signup/:email/3|username <br>firstname<br>lastname<br>date_of_birth | successful(200) <br> error(500 ) <br> no Update(404)|