import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react'
import {
    CButton,
    CBadge,
    CFormCheck,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CFormLabel,
    CFormTextarea,
    CRow,
    CFormFeedback,
    CAlert,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCardText,

} from '@coreui/react'


const skillList = [
    'Skill and Achievement',
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Leadership'
]
const HrReview = () => {

    const [department, setDepartment] = useState('')
    const [ratings, setRatings] = useState({})

    const handleRatingChange = (skill, value) => {
        setRatings(prev => ({ ...prev, [skill]: value }))
    }


    return (
       
    );
};

export default HrReview;
