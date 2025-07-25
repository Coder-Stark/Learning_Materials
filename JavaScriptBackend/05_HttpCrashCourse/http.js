//What is HTTP Headers
/*
metadata => key-value sent along wiht req & res
uses => caching, auth, manage state

Types of headers
Request headers => from client
Response headers => from server
Representation headers => encoding / compression
Payload headers => data
*/

/* MOST COMMON HEADERS
accept: application/json
user-agent
authorization: Bearer-<...>
content-type
cookie
cache-control


CORS
access-control-allow-origin
access-control-allow-credentials
access-control-allow-method


SECURITY
cross-origin-embedder-policy
cross-origin-opener-policy
content-security-policy
x-xss-protection
*/


/* HTTP METHODS              (CURD)
basic set of operations that can be used to interact with server

POST: interact with resource (CREATE)
GET: retrive a resource      (READ)
PUT: replace resource        (UPDATE) complete
PATCH: change part of resource (UPDATE) partiall
DELETE: remove a resource     (DELETE)

HEAD: no message body (response headers only)
OPTIONS: what operations are available
TRACE: loopback test (get some data)
*/


/* HTTP STATUS CODE
1XX = Informational    (100 - continue, 102 - processing)
2XX = Success          (200 - OK, 201 - created, 202 - accepted)
3XX = Redirection      (300 - temporary redirect, 308 - permanent redirect)
4XX = Client Error     (400 - Bad request, 401 - Unauthorized, 402 - Payment required, 404 - Not Found)
5XX = Server Error     (500 - Internal Server Error, 504 - Gateway Time out)
*/