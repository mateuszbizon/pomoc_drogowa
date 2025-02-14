import React, { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren

function Container({ children }: ContainerProps) {
  return (
    <div className='xl:container px-5 mx-auto'>
        {children}
    </div>
  )
}

export default Container