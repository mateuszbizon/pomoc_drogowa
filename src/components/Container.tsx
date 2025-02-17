import React, { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren

function Container({ children }: ContainerProps) {
  return (
    <div className='max-w-[1300px] px-5 mx-auto'>
        {children}
    </div>
  )
}

export default Container