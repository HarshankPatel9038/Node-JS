200 OK: The request has succeeded. The client can get the response in the message body and the header fields will contain metadata about the resource.

201 Created: The request has been fulfilled, resulting in the creation of a new resource. The Location header will contain the URI of the newly created resource.

400 Bad Request: The server could not understand the request due to malformed syntax, missing parameters, etc.

401 Unauthorized: The client must authenticate itself to get the requested response. Typically used when authentication credentials are missing or incorrect.

403 Forbidden: The client does not have permission to access the requested resource, even with authentication.

404 Not Found: The server can't find the requested resource. This is a common response for requests that are not found.

422 Unprocessable Entity: The server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.

500 Internal Server Error: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.

503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.

504 Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server it needed to access in order to complete the request.