import React from 'react'
import withFetch from '../HOC/withFetch'
import useFetch from '../Hooks/useFetch';

function Posts({data, error, loading}) {

    // This is example of HOC
    // const [data, error, loading] = withFetch('https://jsonplaceholder.typicode.com/posts')

    // This is example of custom hook
    const {data: postsData, loading: loadingPosts} = useFetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10');

    console.log(data);

    
   if (loading) return <div>Loading...</div>;
   if (error) return <div>{error}</div>;


  return (
    <>
      <ul>
        {
          postsData?.map((item) => {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </>
  )
}

export default Posts