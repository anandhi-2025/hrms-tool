import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Employee = React.lazy(() => import('./views/pages/Employee/Employee'))
const EmployeeDetails = React.lazy(() => import('./views/pages/Employee/EmployeeDetails'))
const EmployeeReview = React.lazy(() => import('./views/pages/Employee/EmployeeReview'))
const HrReview = React.lazy(() => import('./views/pages/Hr/HrReview'))