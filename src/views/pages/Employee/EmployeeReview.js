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
const EmployeeReview = () => {

    const [department, setDepartment] = useState('')
    const [ratings, setRatings] = useState({})

    const handleRatingChange = (skill, value) => {
        setRatings(prev => ({ ...prev, [skill]: value }))
    }


    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const employeeId = params.get('id');
    const employeeDetail = location.state?.employee;
    const { name, employee_id, email } = location.state.employee
    if (!employeeDetail) {
        return (
            <div className=''>
                No record Found
            </div>
        )
    }
    return (
       
    );
};

export default EmployeeReview;
