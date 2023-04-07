import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Container } from '@mui/material'


export const Submit = () => (

   <div class="container">

      <Container maxWidth="sm">
      
         <TextField id="standard-basic" label="Nombre" variant="standard" />
         <TextField id="standard-basic" label="Apellido" variant="standard" />
         <Button variant="contained" color="success">Add</Button>   
      
      </Container>
   
   </div>
);

Submit.propTypes = {};

Submit.defaultProps = {};

export default Submit;
