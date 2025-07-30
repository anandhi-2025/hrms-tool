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
        <>
            <div className="p-4">
                <h2>Employee Review</h2>
                <p>Employee ID: {employeeId}</p>
                <p>Employee Name: {name}</p>
                <p>Employee Email: {email}</p>
                {/* Here you can fetch employee info from API using this ID */}
            </div>
            <CContainer className="py-4">
                <h3>Employee Performance Review</h3>
                <CForm>
                    <CCard className="mb-3">
                    <CCardHeader>Review Summary</CCardHeader>
                    <CCardBody>
                        <CRow className="mb-3">
                            <CCol md={4}>
                                <CCardText>
                                    <CCardTitle>User Review</CCardTitle>
                                    <div className="d-flex flex-column">
                                        <p><strong>Skill and Achievement:</strong> <CBadge color="success">5</CBadge></p>
                                        <p><strong>Communication:</strong> <CBadge color="success">4</CBadge></p>
                                        <p><strong>Teamwork:</strong> <CBadge color="success">3</CBadge></p>
                                        <p><strong>Problem Solving:</strong> <CBadge color="success">4</CBadge></p>
                                        <p><strong>Leadership:</strong> <CBadge color="success">3</CBadge></p>
                                    </div>
                                </CCardText>
                            </CCol>
                            <CCol md={4}>
                                <CCardText>
                                    <CCardTitle>Achievement </CCardTitle>
                                    <div className="d-flex flex-column">
                                        <p><strong>Skill and Achievement:</strong>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien felis,
                                                sagittis a sapien ac, commodo pretium sem.
                                                Vivamus mollis a nunc id feugiat. Proin eleifend imperdiet mauris ac faucibus. Sed enim ligula.
                                            </span>
                                        </p>
                                        <p><strong>Self Improvement:</strong>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien felis,
                                                sagittis a sapien ac, commodo pretium sem.
                                                Vivamus mollis a nunc id feugiat. Proin eleifend imperdiet mauris ac faucibus. Sed enim ligula.
                                            </span>
                                        </p>
                                    </div>
                                </CCardText>
                            </CCol>
                        </CRow>
                        {/* <CButton color="primary">Review Here</CButton> */}
                    </CCardBody>
                </CCard>

                </CForm>
            </CContainer>

              <CContainer className="py-4">
                <h3>Manager  Review</h3>
                <CForm>
                    <CCard className="mb-3">
                    <CCardHeader>Manager Summary</CCardHeader>
                    <CCardBody>
                        <CRow className="mb-3">
                            <CCol md={4}>
                                <CCardText>
                                    <CCardTitle>Manager Review</CCardTitle>
                                    <div className="d-flex flex-column">
                                        <p><strong>Skill and Achievement:</strong> <CBadge color="success">5</CBadge></p>
                                        <p><strong>Communication:</strong> <CBadge color="success">4</CBadge></p>
                                        <p><strong>Teamwork:</strong> <CBadge color="success">3</CBadge></p>
                                        <p><strong>Problem Solving:</strong> <CBadge color="success">4</CBadge></p>
                                        <p><strong>Leadership:</strong> <CBadge color="success">3</CBadge></p>
                                    </div>
                                </CCardText>
                            </CCol>
                            <CCol md={4}>
                                <CCardText>
                                    <CCardTitle>Achievement </CCardTitle>
                                    <div className="d-flex flex-column">
                                        <p><strong>Strengths Observed:</strong>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien felis,
                                                sagittis a sapien ac, commodo pretium sem.
                                                Vivamus mollis a nunc id feugiat. Proin eleifend imperdiet mauris ac faucibus. Sed enim ligula.
                                            </span>
                                        </p>
                                        <p><strong>Development Areas:</strong>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien felis,
                                                sagittis a sapien ac, commodo pretium sem.
                                                Vivamus mollis a nunc id feugiat. Proin eleifend imperdiet mauris ac faucibus. Sed enim ligula.
                                            </span>
                                        </p>
                                         <p><strong>Suggested Action Plan:</strong>
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien felis,
                                                sagittis a sapien ac, commodo pretium sem.
                                                Vivamus mollis a nunc id feugiat. Proin eleifend imperdiet mauris ac faucibus. Sed enim ligula.
                                            </span>
                                        </p>
                                    </div>
                                </CCardText>
                            </CCol>
                        </CRow>
                        <Link to="/employee/details" color="primary">Edit Personal Review</Link>
                    </CCardBody>
                </CCard>

                </CForm>
            </CContainer>
        </>
    );
};

export default EmployeeReview;
