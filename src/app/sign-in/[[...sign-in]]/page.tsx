'use-client';
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full flex my-5 items-center justify-center'>
      <SignIn signUpUrl='/sign-up'/>
    </div>
  )
}