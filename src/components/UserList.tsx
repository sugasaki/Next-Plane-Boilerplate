import React, { useState } from 'react'
import axios from 'axios'
import styles from './UserList.module.css'
import { timeout } from '../modules/util'

const endPoint = 'https://jsonplaceholder.typicode.com/'
axios.defaults.baseURL = endPoint

export const UserList = () => {
  const [users, setUsers] = useState<[]>()
  const [isProgress, setIsProgress] = useState<boolean>(false)
  const [error, setError] = useState()

  /**
   * User情報のロード
   */
  const getUsers = async () => {
    setIsProgress(true)

    await axios
      .get('/users')
      .then(async (response) => {
        // handle success
        await timeout(500)
        setUsers(response.data)
      })
      .catch(async (error) => {
        // handle error
        setError(error)
      })
    // .then(function () {
    //   // always executed
    // })

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
          {error && <div>{JSON.stringify(error)}</div>}
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
