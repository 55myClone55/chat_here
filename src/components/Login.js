import {  Button, Container,Grid } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box'
import { useContext } from 'react'
import { Context } from '../index'
import  firebase from 'firebase'
//import { initializeApp } from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const Login =  () => {

const {auth} = useContext(Context)

const login = async () => {
const provider = new firebase.auth.GoogleAuthProvider()
const {user} = await auth.signInWithPopup(provider)
console.log(user)
}



    return (
        <Container>
            <Grid container
            style={{height:window.innerHeight - 50}}
            alignItems={'center'}
            justify={'center'}
            >
          
            
            <Grid style={{ width:400 , background:'lightgray'}}
container
alighItems={'center'}
justify={'center'}
            >
<Box p={5}>
    <Button onClick={login} variant={'outlined'}>go on with help google</Button>
</Box>
            </Grid>

            </Grid>
        </Container>
    )
}
export default Login