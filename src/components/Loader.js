import React from 'react'
import { Container,Grid } from '@material-ui/core'



 const Loader = () => {
    return (
        <Container>
        <Grid container
        style={{height:window.innerHeight - 50}}
        alignItems={'center'}
        justify={'center'}
        >
      
        
        <Grid
container
alighItems={'center'}
justify={'center'}
        >
<div class="lds-circle"><div></div></div>
        </Grid>

        </Grid>
    </Container>
    )
}
export default Loader