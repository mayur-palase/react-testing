import React from 'react'
import withFetch from '../HOC/withFetch'

function Posts({data, error, loading}) {

    // const [data, error, loading] = withFetch('https://jsonplaceholder.typicode.com/posts')
    console.log(data);

  return (
    <>
      <ul>
        {
          data?.map((item) => {
            return <li>{item.title}</li>
          })
        }
      </ul>
    </>
  )
}

export default Posts