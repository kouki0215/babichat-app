import React, { useState } from 'react'
import { auth, provider } from '../../../firebase'
import 'firebaseui/dist/firebaseui.css'
import { signInWithPopup } from 'firebase/auth'
import { signIn, useAuth } from '../../../firebase/authFunction'
import { Link, Navigate } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }
  const signInUser = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn(email, password)
  }

  return (
    <>
      {signInUser.uid ? (
        <Navigate to='/home' />
      ) : (
        <div>
          <h1>ログイン</h1>
          <div className='login-page'>
            <form onSubmit={handleSubmit}>
              <div>
                {/* <label>メールアドレス</label> */}
                <input
                  name='email'
                  type='email'
                  placeholder='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                {/* <label>パスワード</label> */}
                <input
                  name='password'
                  type='password'
                  placeholder='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button>ログイン</button>
              </div>
              <div className='user-register'>
                <Link to='/signup'>ユーザ登録はこちらから</Link>
              </div>
            </form>
            <div className='google-login'>
              <button onClick={signInWithGoogle}>Googleでログイン</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default SignIn
