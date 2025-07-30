import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CRating } from '@coreui/react-pro'

import '../../../../node_modules/@coreui/coreui-pro/dist/css/coreui.min.css'
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
  CFormTextarea,
  CRow,
  CFormFeedback,
  CAlert

} from '@coreui/react'

import avatar1 from 'src/assets/images/avatars/1.jpg'

const Employee = () => {
  const [formData, setFormData] = useState({
    skillAchievement: '',
    selfImprovement: '',
    ratings: {
      skillAchievement: 3,
      communication: 3,
      teamwork: 3,
      problemSolving: 3,
      leadership: 3,
    },
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTextareaChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleRatingChange = (key, value) => {
    setFormData({
      ...formData,
      ratings: {
        ...formData.ratings,
        [key]: value,
      },
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.skillAchievement.trim())
      newErrors.skillAchievement = 'This field is required';
    if (!formData.selfImprovement.trim())
      newErrors.selfImprovement = 'This field is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Mock saving logic
    console.log('Form submitted successfully!', formData);
    setShowSuccess(true);
    setFormData({
      skillAchievement: '',
      selfImprovement: '',
      ratings: {
        skillAchievement: 3,
        communication: 3,
        teamwork: 3,
        problemSolving: 3,
        leadership: 3,
      },
    });

    setTimeout(() => setShowSuccess(false), 3000);
  };
  return (
    <div className="d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="">
          <CCol md={12} className='text-center'>
            <div class="card user-card text-center p-4">
              <div class="card-body">
                <img src={avatar1} alt="User Avatar" class="user-avatar shadow-sm" />
                <h4 class="mt-3">Anandhi</h4>
                <p class="text-muted">Frontend Developer</p>

                <div class="text-start mt-4">
                  <p><strong>Name:</strong> Anandhi</p>
                  <p><strong>Empployee Id:</strong> #3445677890</p>
                  <p><strong>Email:</strong> Anandhi@piquota.com</p>
                </div>
              </div>
            </div>
          </CCol>
          <CCol md={12} className=''>

            {showSuccess && (
              <CAlert color="success" dismissible>
                Form submitted successfully!
              </CAlert>
            )}
            <div class="card user-card  p-4">
              <div class="card-body">
                <CForm onSubmit={handleSubmit}>
                  <h1>Appraisal</h1>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Skill and Achievement </CFormLabel>
                    <CFormTextarea
                      id="skillAchievement"
                      name="skillAchievement"
                      rows={3}
                      value={formData.skillAchievement}
                      onChange={handleTextareaChange}
                      invalid={!!errors.skillAchievement}
                    />
                    {errors.skillAchievement && (
                      <CFormFeedback invalid>{errors.skillAchievement}</CFormFeedback>
                    )}
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Self Improvement</CFormLabel>
                    <CFormTextarea
                      id="selfImprovement"
                      name="selfImprovement"
                      rows={3}
                      value={formData.selfImprovement}
                      onChange={handleTextareaChange}
                      invalid={!!errors.selfImprovement}
                    />
                    {errors.selfImprovement && (
                      <CFormFeedback invalid>{errors.selfImprovement}</CFormFeedback>
                    )}
                  </div>

                  <div className="">
                    <p className='mb-0'><b>Rate your self:</b></p>
                    {[
                      { label: 'Skill and Achievement', key: 'skillAchievement' },
                      { label: 'Communication', key: 'communication' },
                      { label: 'Teamwork', key: 'teamwork' },
                      { label: 'Problem Solving', key: 'problemSolving' },
                      { label: 'Leadership', key: 'leadership' },
                    ].map((item) => (
                      <div className="row mb-3" key={item.key}>
                        <CFormLabel className="form-label col-sm-6 col-form-label">
                          {item.label}
                        </CFormLabel>
                        <div className="col-sm-6 mt-2">
                          <CRating
                            tooltips="{['1', '2', '3', '4', '5']}"
                            value={formData.ratings[item.key]}
                            onChange={(val) => handleRatingChange(item.key, val)}
                          />
                        </div>
                      </div>
                    ))}
                    {/* <div className='row mb-3'>
                                            <CFormLabel htmlFor="exampleFormControlInput1" className='form-label col-sm-6 col-form-label'>Skill and Achievement</CFormLabel>
                                            <div className='col-sm-6 mt-2'>
                                                <CRating tooltips value={3} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <CFormLabel htmlFor="exampleFormControlInput1" className='form-label col-sm-6 col-form-label'>Communication</CFormLabel>
                                            <div className='col-sm-6 mt-2'>
                                                <CRating tooltips value={3} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <CFormLabel htmlFor="exampleFormControlInput1" className='form-label col-sm-6 col-form-label'>Teamwork</CFormLabel>
                                            <div className='col-sm-6 mt-2'>
                                                <CRating tooltips value={3} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <CFormLabel htmlFor="exampleFormControlInput1" className='form-label col-sm-6 col-form-label'>Problem Solving</CFormLabel>
                                            <div className='col-sm-6 mt-2'>
                                                <CRating tooltips value={3} />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <CFormLabel htmlFor="exampleFormControlInput1" className='form-label col-sm-6 col-form-label'>Leadership</CFormLabel>
                                            <div className='col-sm-6 mt-2'>
                                                <CRating tooltips value={3} />
                                            </div>
                                        </div> */}
                    {/* <CButton color="success">Create Account</CButton> */}
                    <CButton type="submit" color="primary">
                      Submit
                    </CButton>
                  </div>
                </CForm>
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Employee
