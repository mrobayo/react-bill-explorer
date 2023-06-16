import React from 'react'
import { type BillKeys } from '../../types'
import { TableHead, TableRow, TableCell } from '@mui/material'

interface Props {
  headers: Array<{ name: BillKeys, label: string }>
}

const BillHeader: React.FC<Props> = ({ headers }) => {
  return <TableHead>
    <TableRow>
      { headers.map((header, index) => (
          <TableCell key={index}> {header.label} </TableCell>
      )) }
    </TableRow>
  </TableHead>
}

export default BillHeader
