import React from 'react'

function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn