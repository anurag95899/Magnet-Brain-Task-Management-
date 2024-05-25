import React from 'react'
import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()


const instance = axios.create({
    baseURL:"http://localhost:8080/api",
    withCredentials: true,
})

export default instance