import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { spawn } from "child_process";

export function middleware(req: NextRequest, res: NextResponse) {
  try {
    if (process.version) {
      spawn("ls", ["-lh"]);
    }
    const response = NextResponse.next();
    const JWT = req.body;
    const token = jwt.sign(JSON.stringify(JWT), process.env.MY_SECRET);
    res.cookies.set("user_token", token);
    res.cookies.set("user_token", token, { path: "/api/signin" });
   
    // Getting cookies from the request
    const cookie = req.cookies.get("user_token");
    console.log(cookie); 
    const allCookies = req.cookies.entries();
    console.log(allCookies); 
    const { value, options } = response.cookies.getWithOptions("user_token");
    console.log(value);
    console.log(options); 

    return response

  } catch (error) {
    console.log(error);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/signin",
};

// // middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'


// export function middleware(request: NextRequest) {
//   // Setting cookies on the response
//   const response = NextResponse.next()
//   response.cookies.set('token', 'fast')
//   response.cookies.set('token', 'fast', { path: '/api/signin' })

//   // Getting cookies from the request
//   const cookie = request.cookies.get('vercel')
//   console.log(cookie) // => 'fast'
//   const allCookies = request.cookies.entries()
//   console.log(allCookies) // => [{ key: 'vercel', value: 'fast' }]
//   const { value, options } = response.cookies.getWithOptions('vercel')
//   console.log(value) // => 'fast'
//   console.log(options) // => { Path: '/test' }

//   // Deleting cookies
//   response.cookies.delete('vercel')
//   response.cookies.clear()

//   return response
// }