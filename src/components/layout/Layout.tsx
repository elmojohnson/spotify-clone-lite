import React, {FC} from 'react'

type LayoutType = {
    children: any
}

const Layout:FC<LayoutType> = ({children}) => {
  return (
    <div>
        <h1>App</h1>
        <main>{children}</main>
    </div>
  )
}

export default Layout