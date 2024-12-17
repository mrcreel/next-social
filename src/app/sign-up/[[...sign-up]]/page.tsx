import React from 'react'

import { SignUp } from '@clerk/nextjs'

const SignupPage = () => {
  return (
    <div className="flex h-[calc(100vh-96px)] items-center justify-center">
      <SignUp />
    </div>
  )
}

export default SignupPage
