import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import {
  CButton,
  CCard,
CFormCheck ,
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
  CAlert

} from '@coreui/react'


const skillList = [
  'Skill and Achievement',
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Leadership'
]
const EmployeeDetails = () => {

     const [department, setDepartment] = useState('')
  const [ratings, setRatings] = useState({})

  const handleRatingChange = (skill, value) => {
    setRatings(prev => ({ ...prev, [skill]: value }))
  }


  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const employeeId = params.get('id');
const employeeDetail = location.state?.employee;
const {name, employee_id, email} = location.state.employee
if(!employeeDetail)
{
    return(
        <div className=''>
            No record Found
        </div>
    )
}
  return (
    <>
    <div className="p-4">
      <h2>Employee View Details</h2>
      <p>Employee ID: {employeeId}</p>
      <p>Employee Name: {name}</p>
      {/* Here you can fetch employee info from API using this ID */}
    </div>
    <CContainer className="py-4">
      <h3>Employee Performance Review</h3>
      <CForm>
        <CRow className="mb-3">
          <CCol md={4}>
            <CFormLabel htmlFor="department">Strengths Observed</CFormLabel>
            <CFormTextarea
              id="strengths"
              placeholder="Strengths Observed"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="department">Development Areas</CFormLabel>
            <CFormTextarea
              id="department"
              placeholder="Development Areas"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </CCol>
            <CCol md={4}>
            <CFormLabel htmlFor="department">Suggested Action Plan</CFormLabel>
            <CFormTextarea
              id="suggested"
              placeholder="Suggested Action Plan"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </CCol>
        </CRow>

        <h5 className="mt-4">Rate the person based on the following aspects of their job:</h5>
        <p>(1 - Unsatisfactory ... 5 - Excellent)</p>

        {skillList.map((skill, index) => (
          <CRow className="align-items-center mb-2" key={index}>
            <CCol xs={4}>
              <CFormLabel>{skill}</CFormLabel>
            </CCol>
            <CCol xs={8}>
              {[1, 2, 3, 4, 5].map(value => (
                <CFormCheck
                  key={value}
                  inline
                  type="radio"
                  name={`rating-${index}`}
                  label={value}
                  checked={ratings[skill] === value}
                  onChange={() => handleRatingChange(skill, value)}
                />
              ))}
            </CCol>
          </CRow>
        ))}
           <CButton type="submit" color="primary">
                              Submit
                            </CButton>
      </CForm>
    </CContainer>
    </>
  );
};

export default EmployeeDetails;
