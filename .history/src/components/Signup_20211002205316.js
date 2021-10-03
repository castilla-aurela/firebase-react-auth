import React from 'react'
import {Form, Button, Card} from 'react-bootsrap'

export default function Signup() {
    return (
        <>
           <Card>
               <Card.Body>
                   <h2 className>Sign Up</h2>
               </Card.Body>
            </Card> 
           <div className = "w-100 text-center mt-2">
               Already have an account? Log In
           </div>
        </>
    )
}
