import React, { useState } from 'react'
import axios from 'axios'
import styles from './UserList.module.css'

const endPoint = 'https://jsonplaceholder.typicode.com/'
axios.defaults.baseURL = endPoint

export const UserList = () => {
  const [users, setUsers] = useState<[]>()
  const [isProgress, setIsProgress] = useState<boolean>(false)

  /**
   * User情報のロード
   */
  const getUsers = async () => {
    setIsProgress(true)
    // Make a request for a user with a given ID
    await axios
      .get('/users')
      .then(function (response) {
        // handle success
        console.log(response)
        setUsers(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    setIsProgress(false)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <button className={styles.button} onClick={() => getUsers()}>
            Load User List
          </button>
        </div>

        <div className={styles.box}>
          {isProgress && <div>...Loading</div>}
          {users &&
            users.map((user) => (
              <>
                <div className={styles.user}>
                  <div>{user.id}</div>
                  <div>{user.username}</div>
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </div>
              </>
            ))}
        </div>

        {/* {JSON.stringify(users)} */}
      </div>
    </>
  )
}
