import React from 'react'
import withFetch from '../HOC/withFetch'
import useFetch from '../Hooks/useFetch';
import { keepPreviousData, QueryClient, useMutation, useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Something went wrong...');
    }
    return res.json();
}

const data = {
    body: "Hello World",
    id: 101,
    title: "Hello World",
    userId: 10
}

const addUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}

function Users(prop) {

    const {data, isLoading, isError, error, isFetching, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        placeholderData: keepPreviousData,
    })

    const mutution = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']})
        }
    })

    if(isLoading) return <div>Loading</div>
    if (isError) return <div>{error.message}</div>;

  return (
    <>
      <ul>
        {
          data?.map((item) => {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
      <br></br>
      <br></br>
      <button onClick={() => refetch()}>Refetch</button>
      <button onClick={() => mutution.mutate()}>Add user</button>
    </>
  )
}

export default Users