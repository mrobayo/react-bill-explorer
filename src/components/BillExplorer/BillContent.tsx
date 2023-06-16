import React from 'react'
import { TableBody, TableCell, TableRow } from '@mui/material'
import { type BillKeys, type BillType, type FormatType } from '../../types'
import { get } from 'lodash'

interface BillContentProps {
  bills: BillType[]
  dimensions: Array<{ name: BillKeys, label: string, datetimePattern?: string }>
  facts: Array<{ name: BillKeys, label: string, format?: FormatType }>
}

const BillContent: React.FC<BillContentProps> = ({ bills, dimensions, facts }) => {
  return <TableBody>
      {bills.map((bill, index) => {
        return (<>
          {bill.items.map((item, index) => {
            return (
            <TableRow key={`row-${index}`}>
              {dimensions.map(({ name, label }) => (<TableCell key={`col-${index}-${label}`}> * {get(bill, name)}</TableCell>))}
              {facts.map(({ name, label }) => (<TableCell key={`col-${index}-${label}`}> # {get(item, name)}</TableCell>))}
            </TableRow>
            )
          })}
        </>)
      })
      }
  </TableBody>
}

export default BillContent
