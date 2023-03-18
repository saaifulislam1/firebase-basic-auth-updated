import React, { useContext } from 'react'
import { AuthContext } from '../contexts/UserContext'

function Home() {
  const {user}= useContext(AuthContext)
  return (
    <div>Welcome Home,  {user?.displayName}</div>
  )
}

export default Home