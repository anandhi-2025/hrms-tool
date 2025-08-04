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
  
  );
};

export default EmployeeDetails;
