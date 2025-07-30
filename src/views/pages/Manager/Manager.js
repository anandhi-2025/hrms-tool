import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CRating } from '@coreui/react-pro'
import * as icon from '@coreui/icons';
import '../../../../node_modules/@coreui/coreui-pro/dist/css/coreui.min.css'
import { CIcon } from '@coreui/icons-react';
import {
  CContainer,
  CRow,
  CButton,
  CCol,
  CTable,
  CTableHead,
  CTableDataCell,
  CTableRow,
  CTableBody,
  CTableHeaderCell,

} from '@coreui/react'

import avatar1 from 'src/assets/images/avatars/1.jpg'
const data = [
  {
    id: 1,
    name: 'Mark',
    employee_id: '001',
    email: 'mark@piquota.com'
  },
  {
    id: 2,
    name: 'Jacob',
    employee_id: '002',
    email: 'jacob@piquota.com'
  },
  {
    id: 3,
    name: 'Peter',
    employee_id: '003',
    email: 'peter@piquota.com'
  }
];

const Manager = () => {



  return (
    <div className="d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="">
          <CCol md={12} className='text-center'>
            <CTable color="light" striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Employee Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Employee Id</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Employee Email</CTableHeaderCell>
                  <CTableHeaderCell>Employee Review</CTableHeaderCell>
                  <CTableHeaderCell>Viwe Details</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={item.employee_id}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>{item.employee_id}</CTableDataCell>
                    <CTableDataCell>{item.email}</CTableDataCell>
                    <CTableDataCell>
                      <Link
                        to={`/employee/review?id=${item.employee_id}`}
                    
                        rel="noopener noreferrer"
                        state={{ employee: item }}
                      >
                        <CIcon icon={icon.cilDescription} size="xl" />
                      </Link>
                    </CTableDataCell>
                     <CTableDataCell>
                      <Link
                        to={`/employee/details?id=${item.employee_id}`}
                    
                        rel="noopener noreferrer"
                        state={{ employee: item }}
                      >
                        <CIcon icon={icon.cilList} size="xl" />
                      </Link>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Manager
