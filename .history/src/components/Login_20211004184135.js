import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'

import { useAuth } from '../contexts/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            console.log(emailRef.current.value, passwordRef.current.value)
           await  signup(emailRef.current.value, passwordRef.current.value)
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
           <Card>
               <Card.Body>
                   <h2 className="text-center mb-4">Sign Up</h2>
                   {error && <Alert variant="danger">{error}</Alert> }
                   <Form onSubmit={handleSubmit}>
                       <Form.Group id="email">
                           <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                       </Form.Group>
                       <Form.Group id="password" className="mt-2">
                           <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                       </Form.Group>
                       </Form.Group>
                       <Button disabled= {loading} className= "w-100  mt-3" type="Submit" >Sign Up</Button>
                   </Form>
               </Card.Body>
            </Card> 
           <div className = "w-100 text-center mt-2">
               Already have an account? Log In
           </div>
        </>
    )
}
