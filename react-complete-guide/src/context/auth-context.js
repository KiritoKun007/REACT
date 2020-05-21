import React from 'react'

const authContext = React.createContext({
    authenticated: false, 
    loggin: () => {}
})

export default authContext