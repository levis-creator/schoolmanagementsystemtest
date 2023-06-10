import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allStaffStatus, allStaffs, getAllStaffs } from '../../../../features/staff/staffSlice'
import DataTable from '../components/DataTable'
import FloatingAdd from '../components/FloatingAdd'
import CreateForm from '../components/CreateForm'

const AllStaffs = () => {
  const dispatch=useDispatch()
  const staffStatus=useSelector(allStaffStatus)
  const data=useSelector(allStaffs)
  useEffect(()=>{
    if(staffStatus==="idle"){
      dispatch(getAllStaffs())
    }
  },[dispatch, staffStatus])
  return (
    <div>
      <CreateForm staff={true}/>
      <DataTable data={data}/>
      <FloatingAdd staff={true}/>
    </div>
  )
}

export default AllStaffs
