'use-client';

import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full flex my-5 items-center justify-center'>
      <SignUp signInUrl='/sign-in'/>
    </div>
  )
}