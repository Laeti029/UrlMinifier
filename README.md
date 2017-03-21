# Documentation API:
| *URL* | *Header*| *GET* | *POST* | *DELETE* |
| :------------- | :------------- | :------------- | :------------- | :------------- |
| /url | x-Auth | | => `{ baseUrl: string }` | => `{ id: int}` |
| | |  <= `[{ id : int, baseUrl: string, minifiedUrl: string }, ... ]` | <= `{ id : int, baseUrl: string, minifiedUrl: string }` |  <= `{ id : int, baseUrl: string, minifiedUrl: string }` |
