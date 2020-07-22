import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


// Acciones
import { updateName, updateApellidos, updateEmail } from './../redux/actions/userAction';

// Css
import './Login.css';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     nombre: document.getElementById("nombre").value,
        //     apellidos: document.getElementById("apellidos").value,
        //     email: document.getElementById("email").value
        // };
    }
    handleChangeNombre(e) {
        localStorage.setItem('nombre', e.target.value);
        updateName(e.target.value);
    }

    handleChangeApellidos(e) {
        localStorage.setItem('apellidos', e.target.value);
        updateApellidos(e.target.value);
    }

    handleChangeEmail(e) {
        localStorage.setItem('email', e.target.value);
        updateEmail(e.target.value);
    }
    // localStorage.getItem('nombre'), localStorage.getItem('apellidos'), localStorage.getItem('email')
    render() {
        return (
            <div className="Login">
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field id="nombre" control={Input} label='Nombre' placeholder='Nombre' onChange={this.handleChangeNombre} />
                        <Form.Field id="apellidos"  control={Input} label='Apellidos' placeholder='Apellidos' onChange={this.handleChangeApellidos} />
                        <Form.Field is="email"  control={Input} label='Email' placeholder='Email' onChange={this.handleChangeEmail} />
                    </Form.Group>
                    <Link to='/login' target="_parent">Continuar</Link>
                </Form>
            </div>
        );

    }

}

const mapDispatchToProps = (dispatch) => ({
    updateName: (name) => dispatch(updateName(name)),
    updateApellidos: (apellidos) => dispatch(updateApellidos(apellidos)),
    updateEmail: (email) => dispatch(updateEmail(email))
  });
  
  export default connect(
    () => ({}),
    mapDispatchToProps,
  )(LoginForm);
