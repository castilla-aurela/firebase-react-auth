import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            //console.log(emailRef.current.value, passwordRef.current.value)
           //await  login(emailRef.current.value, passwordRef.current.value)
           history.push("/")
        } catch{
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <>
           <Card>
               <Card.Body>
                   <h2 className="text-center mb-4"> Password</h2>
                   {error && <Alert variant="danger">{error}</Alert> }
                   <Form onSubmit={handleSubmit}>
                       <Form.Group id="email">
                           <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                       </Form.Group>
                       <Button disabled= {loading} className= "w-100  mt-3" type="Submit" >Reset Password</Button>
                   </Form>
                   <div className = "w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                   </div>
               </Card.Body>
            </Card> 
           <div className = "w-100 text-center mt-2">
               Need an account? <Link to="/signup"> Sign Up </Link>
           </div>
        </>
    )
}
