import React from 'react'
import { type BillKeys, type BillType, type FormatType } from '../../types'
import BillHeader from './BillHeader'
import { Table } from '@mui/material'
import BillContent from './BillContent'

export interface BillExplorerProps {
  bills: BillType[]
  dimensions: Array<{ name: BillKeys, label: string, datetimePattern?: string }>
  facts: Array<{ name: BillKeys, label: string, format?: FormatType }>
}

const BillExplorer: React.FC<BillExplorerProps> = ({ bills, dimensions, facts }) => {
  return (
      <div>
        <Table>
            <BillHeader headers={[...dimensions, ...facts]} />
            <BillContent bills={bills} dimensions={dimensions} facts={facts} />
        </Table>
      </div>
  )
}

export default BillExplorer
