import React from 'react'

import { SignIn } from '@clerk/nextjs'

const SigninPage = () => {
  return (
    <div className="flex h-[calc(100vh-96px)] items-center justify-center">
      <SignIn />
    </div>
  )
}

export default SigninPage
