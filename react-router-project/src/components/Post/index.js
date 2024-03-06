import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const params = useParams();
    const [data, setData] = useState();
    const getPostsData = (counter) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${counter}`)
            .then((response) => {
                setData(response.data);
            })

    }

    // sync await
    // https vs http
    // axios

    // can't use await without async

    useEffect(() => {
        if (params.id) {
            getPostsData(params.id)
        }
    }, [params]);

    return (
        <div>
            {data && <div>
                <div>{data.id}</div>
                <div>{data.userId}</div>
                <div>{data.title}</div>
                <div>{data.body}</div>
            </div>}
        </div>
    )
}

export default Post