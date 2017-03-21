# Documentation API:
| *URL* | *Header*| *GET* | *POST* | *DELETE* |
| :------------- | :------------- | :------------- | :------------- | :------------- |
| /url | x-Auth | <= `[{ id : int, baseUrl: string, minifiedUrl: string }, ... ]` | `{ baseUrl: string }` | => `{ id: int}` |
| | | | <= { id : int, baseUrl: string, minifiedUrl: string } |  <= { id : int, baseUrl: string, minifiedUrl: string } |
