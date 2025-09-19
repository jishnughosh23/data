
import { useContext } from 'react'
import { AppContext } from './UseContext'


function Child() {
    const userData = useContext(AppContext)
    console.log(userData);
    
  return (
    <div>Child = My name is {userData.name}</div>
  )
}

export default Child