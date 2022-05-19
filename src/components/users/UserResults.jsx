import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

/**
 * Reducers - functions we can use to manipulate our state.
 * Example: redux (with the context api there is no need 
 * for using this unless it is a huge application with a lot of state)
 * Most cases can be handled by react and context api.
 * 
 * Redux is a 3rd party state manager 
 * Not as popular now due to context built in react functionalaity
 */

function UserResults() {
    // this is how you get the values from the context file
  const {users, loading} = useContext(GithubContext)

  if(!loading) {
    return (
        /** Setting different number of columns based on the size of the screen.*/
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user) => (
             <UserItem key={user.id} user={user}/>
          ))}
      </div>
    )
  } else {
    return <Spinner />
  }

  
}

export default UserResults