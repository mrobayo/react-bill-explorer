import React from 'react'
import { type BillType } from '../../types'

interface BillExplorerProps {
  bill: BillType[]
  headers: string[]
  factKeys: string[]
}

const BillExplorer: React.FC<BillExplorerProps> = (props) => {
  return (
      <div>BillExplorer</div>
  )
}

export default BillExplorer
