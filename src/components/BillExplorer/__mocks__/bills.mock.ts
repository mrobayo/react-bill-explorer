import { type BillType } from '../../../types'

export const oneRowBill: BillType = {
  billId: '9999',
  billType: 'INVOICE',
  issuerCode: '000',
  issuerName: 'Provider',
  issueDate: '2023-02-18',
  summary: {
    subTotal: 1,
    totalCost: 1
  },
  items: [
    {
      line: 0,
      itemCode: '01',
      unitPrice: 5,
      quantity: 0.2,
      totalPrice: 1,
      totalAmount: 1
    }
  ],
  currency: ''
}
