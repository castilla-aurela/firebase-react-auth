import React from 'react'
import {Form, Button, Card} from 'react-bootsrap'

export default function Signup() {
    return (
        <>
           <Card>
               Card.<style>
                   div|body {
                       position: relative;
                   }
               </style>
               
               <div|body data-bs-spy="scroll" data-bs-target="#navId">
                   
                   <div id="navId">
                       <ul class="nav nav-tabs" role="tablist">
                           
                       </ul>
                   </div>
                   
               </div|body>
               
               
               <script>
                   var scrollSpy = new bootstrap.ScrollSpy(document.body, {
                     target: '#navId'
                   })
               </script>
            </Card> 
           <div className = "w-100 text-center mt-2">
               Already have an account? Log In
           </div>
        </>
    )
}
