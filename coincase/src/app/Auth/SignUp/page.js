import React from 'react'

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp