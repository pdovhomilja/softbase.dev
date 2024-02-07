'use client'
import { useEffect } from 'react'

const SessionInfo = () => {
  useEffect(() => {
    const fetchIpInfo = async () => {
      const sessionData = sessionStorage.getItem('ipInfo')
      if (!sessionData) {
        console.log('New session!')
        const response = await fetch('/api/ipinfo')
        const data = await response.json()
        sessionStorage.setItem('ipInfo', JSON.stringify(data))
      } else {
        console.log('Returning session!')
      }
    }
    fetchIpInfo()
  }, [])

  return <div></div>
}

export default SessionInfo
