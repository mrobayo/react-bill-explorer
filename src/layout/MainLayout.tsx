import React from 'react'

interface Props {
  theme: string
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ theme, children }) => {
  return <div className={theme}>{children}</div>
}

export default MainLayout
