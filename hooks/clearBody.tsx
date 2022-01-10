import { useEffect } from 'react'

export const clearBody = () => {
  useEffect(() => {
    document.body.id = '';
  },[]);
}