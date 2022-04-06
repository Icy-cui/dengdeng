import React,{useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function DataTable() {
    const [users, setUsers] = useState([]);

    const getRenderData = async () => {
        let res = await fetch("../../api/users.json",{
            method: "GET",
        });

        if(res.status == 200){
            let data = await res.json();
            let resData = data.data;
            setUsers(resData);
        } else {
            throw new Error(res.status)
        }
    }

    useEffect(() => {
        getRenderData();
    },[])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
