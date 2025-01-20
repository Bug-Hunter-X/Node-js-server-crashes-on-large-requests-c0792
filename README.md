# Node.js Server Crash on Large Requests

This repository demonstrates a common issue in Node.js servers: crashing due to memory exhaustion when handling large requests.  The provided `bug.js` file contains a vulnerable server implementation.  The solution, `bugSolution.js`, addresses this issue by using streams for handling large request bodies efficiently.

## Problem

The original server attempts to accumulate the entire request body into a single string variable (`body`).  For large requests, this approach can quickly lead to memory exhaustion, causing the server to crash.

## Solution

The solution utilizes streams to process the request body chunk by chunk, preventing the server from loading the entire body into memory at once. This allows the server to handle much larger requests without crashing.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js`
3. Send a large POST request to `http://localhost:3000`. You can use tools like `curl` or `Postman` for this.
4. Observe that the server crashes.

## How to run the solution

1. Run `node bugSolution.js`
2. Send a large POST request to `http://localhost:3000`.  The server should now handle the request without crashing.