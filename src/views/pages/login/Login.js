import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCol,
    CContainer,
    CRow,
} from '@coreui/react'

import logo from 'src/assets/images/logo.png'
const Login = () => {
    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={12} className='text-center'>
                        <div className='mb-5'>
                            <img src={logo} className='img-fluid home_logo' />
                        </div>
                        <div className='d-block'>
                            <ul className='list-unstyled'>
                                <li className='mb-3'><Link to="/hr/review/" className='btn btn-primary'>If your a manager HR</Link></li>
                                <li className='mb-3'><Link to="/Manager" className='btn btn-primary'>If your a manager Manager</Link></li>
                                <li className='mb-3'><Link to="/otp" className='btn btn-primary'>If your a manager Employee</Link></li>
                            </ul>
                        </div>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Login
