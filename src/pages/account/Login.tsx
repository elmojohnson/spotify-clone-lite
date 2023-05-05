import React from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const {url} = useLogin();

  return (
    <div>
      {url && <a href={url}>Login</a>}
    </div>
  )
}

export default Login