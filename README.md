# Documentation API:
| *URL* | *Header*| *GET* | *POST* | *DELETE* |
| :------------- | :------------- | :------------- | :------------- | :------------- |
| /url | x-Auth | | => `{ baseUrl: string }` | => `{ id: int}` |
| | |  <= `[{ id : int, baseUrl: string, minifiedUrl: string }, ... ]` | <= `{ id : int, baseUrl: string, minifiedUrl: string }` |  <= `{ id : int, baseUrl: string, minifiedUrl: string }` |
| /register | | | => `{ email: string, password; string }` | |
| | | | <= `{ token : string }` | |
| /login | | | => `{ email: string, password: string }` | |
| | | | <= `{ token : string }` | |
