import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext'
import axios from 'axios'
import { base_url } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const useGetUserInfo = () => {
 const [loading, setLoading] = React.useState(true)
 const {user, setUser} = useContext(UserContext)
 const navigate = useNavigate()

 const getInfo = async ()=> {
    setLoading(true)
    try {
        const response = await axios.get(`${base_url}/user/userInfo`, {withCredentials: true})
        const data = response.data
        setUser(data.user)
       
    } catch (error) {
        navigate("/login")
        console.log(err?.response?.data?.message || err?.response?.data?.error || "An error occurred during login");
        
    } finally {
        setLoading(false)
    }
 }

 useEffect(()=> {
    getInfo()
 }, [])

 useEffect(()=> {
    if(user && !user.role ){
        navigate("/login")
    }
 }, [user])


 return {loading}
}

export default useGetUserInfo
