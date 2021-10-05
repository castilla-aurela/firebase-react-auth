import React, { useState } from 'react'
import {Card, Button} from 'react-bootstrap'

export default function Dashboard() {
    const [error, setError] = useState("")


    function handleLogout(){

    }
    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert> }
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
               <Button variant ="Link" onClick={handleLogout}>Log Out</Button>
           </div>
        </>
    )
}
