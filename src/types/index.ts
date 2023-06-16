export interface BillItemType {
  line: number
  itemCode: string
  description?: string
  unitPrice: number
  quantity: number
  discount?: number
  totalPrice: number
  taxCode?: string
  taxAmount?: number
  totalAmount: number
}

export interface BillSummaryType {
  subTotal: number
  totalDiscount?: number
  taxCost?: number
  tip?: number
  totalCost: number
}

export interface BillType {
  billId: string
  billType: string
  issuerCode?: string
  issuerName: string
  issueDate: string
  summary: BillSummaryType
  items: BillItemType[]
  currency?: string
}

export type BillKeys = string[] // keyof BillType | keyof BillItemType | keyof BillSummaryType

export type FormatType = 'currency' | 'percent' | 'number'
