import React from 'react'
import styles from './Layout.module.css'

type LayoutProp = { children: React.ReactNode }

const Layout = ({ children }: LayoutProp): JSX.Element => (
  <div className={styles.layoutWrapper}>{children}</div>
)

export default Layout
