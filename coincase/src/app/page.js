import Link from 'next/link'
import React from 'react'

function Landing() {
  return (
    <div>
      <h1>Hello welcome to our crypto app</h1>
      <Link href="/Auth/SignUp">Sign Up</Link>
      <br></br>
      <Link href="/Auth/SignIn">Sign In</Link>
      <br></br>

      <Link href="/Home">Home</Link>
    </div>
  );
}

export default Landing