import React from 'react'

import { oneRowBill } from './components/BillExplorer/__mocks__/bills.mock'
import BillExplorer from './components/BillExplorer'
import MainLayout from './layout'
import { type BillKeys } from './types'
import { Typography } from '@mui/material'

const App: React.FC = () => {
  const dimensions: Array<{ name: BillKeys, label: string, datetimePattern?: string }> = [
    { name: ['issuerName'], label: 'Issuer' },
    { name: ['billType'], label: 'Type' },
    { name: ['issueDate'], label: 'Date' }
  ]
  const facts: Array<{ name: BillKeys, label: string, datetimePattern?: string }> = [
    { name: ['totalPrice'], label: 'Total Price' },
    { name: ['quantity'], label: 'Quantity' }
  ]

  return (
    <MainLayout theme={'light'}>
      <header>
            <Typography variant="h2" gutterBottom>
                The Bills Explorer
            </Typography>
      </header>
      <section>
        <BillExplorer bills={[oneRowBill]} dimensions={dimensions} facts={facts} />
      </section>
    </MainLayout>
  )
}

export default App
