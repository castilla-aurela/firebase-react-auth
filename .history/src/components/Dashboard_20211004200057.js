import React from 'react'
import {Card, Button} from 'react-bootstrap'

export default function Dashboard() {
    return (
        <>
            <Card>
            <div className = "w-100 text-center mt-2">
               <Button variant ="Link on">Log Out</Button>
           </div>
            </Card>
        </>
    )
}
