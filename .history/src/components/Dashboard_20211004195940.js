import React from 'react'
import {Card} from 'react-bootstrap'

export default function Dashboard() {
    return (
        <>
            <Card>
            <div className = "w-100 text-center mt-2">
               Need an account? <Link to="/signup"> Sign Up </Link>
           </div>
            </Card>
        </>
    )
}
