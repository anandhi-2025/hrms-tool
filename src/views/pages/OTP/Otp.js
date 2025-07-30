import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CFormLabel,
    CRow, CAlert
} from '@coreui/react'

import avatar1 from 'src/assets/images/avatars/1.jpg'
const Otp = () => {
    const [emailSent, setEmailSent] = useState(false);
     const [email, setEmail] = useState('')
    const [otpInput, setOtpInput] = useState('')
    const [otpError, setOtpError] = useState(false)

    const hardcodedOTP = '123456' // mock OTP
    const navigate = useNavigate();
    const handleSendOtp = async () => {
        // setEmailSent(true)
         try {
    const response = await axios.post('http://localhost:5000/send-otp', { email: 'test' },
        {
            headers: {
    'Content-Type': 'application/json',
  },
        }
    )
  
    setEmailSent(true)
    setOtpError(false)
    console.log('OTP Sent:', response.data.otp) // Remove in production
  } catch (err) {
    console.error('Error sending OTP:', err)
  }
    }

    const handleVerifyOtp = async () => {
         try {
    const res = await axios.post('http://localhost:3001/verify-otp', {
      email,
      otp: otpInput,
    })
    if (res.data.success) {
      navigate('/employee')
    } else {
      setOtpError(true)
    }
  } catch (err) {
    setOtpError(true)
  }
        // if (otpInput === hardcodedOTP) {
        //     navigate('/employee')
        // } else {
        //     setOtpError(true)
        // }
        //     if (parseInt(enteredOtp) === otp) {
        //         setVerificationStatus('success')
        //           setTimeout(() => {
        //     navigate('/employee')
        //   }, 1000)
        //     } else {
        //         setVerificationStatus('error')
        //     }
    }
    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm>
                                    <h1>Employee Appraisal Form</h1>

                                    {!emailSent && (
                                        <>
                                            <CFormLabel htmlFor="email">Email address</CFormLabel>
                                            <CInputGroup className="mb-3">
                                                {/* <CFormInput placeholder="Enter Email id" /> */}
                                                <CFormInput
                                                    placeholder="Enter Email ID"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />

                                                <CInputGroupText>@piquota.com</CInputGroupText>
                                            </CInputGroup>
                                            <div className="d-grid">
                                                <CButton color="primary" onClick={handleSendOtp}>
                                                    Send OTP
                                                </CButton>
                                            </div>
                                        </>
                                    )}

                                    {emailSent && (
                                        <>
                                            <CAlert color="success">
                                                OTP has been sent to your email. Please enter it below.
                                            </CAlert>
                                            <CFormLabel htmlFor="otp">Enter OTP</CFormLabel>
                                            <CInputGroup className="mb-3">
                                                <CFormInput
                                                    type="text"
                                                    placeholder="Enter OTP"
                                                    value={otpInput}
                                                    onChange={(e) => {
                                                        setOtpInput(e.target.value)
                                                        setOtpError(false)
                                                    }}
                                                />
                                            </CInputGroup>
                                            {otpError && (
                                                <CAlert color="danger">Invalid OTP. Please try again.</CAlert>
                                            )}
                                            <div className="d-grid">
                                                <CButton color="success" onClick={handleVerifyOtp}>
                                                    Verify OTP
                                                </CButton>
                                            </div>
                                        </>
                                    )}
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Otp
