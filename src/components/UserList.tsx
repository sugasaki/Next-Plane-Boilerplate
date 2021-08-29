import React, { useState } from 'react'
import axios from 'axios'
import styles from './UserList.module.css'

const endPoint = 'https://jsonplaceholder.typicode.com/'
axios.defaults.baseURL = endPoint

export const UserList = () => {
  const [users, setUsers] = useState<[]>()

  /**
   * User情報のロード
   */
  const getUsers = () => {
    // Make a request for a user with a given ID
    axios
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
          {users &&
            users.map((user) => (
              <>
                <div className={styles.user}>
                  <div>{user.name}</div>
                </div>
              </>
            ))}
        </div>

        {/* {JSON.stringify(users)} */}
      </div>
    </>
  )
}
