import React from 'react'

type ContainerProps = {
    containerClassName?: string
    sessionClassName?: string
}

const Container: React.FC<ContainerProps> = ({ children, containerClassName, sessionClassName }) => {
    return (
        <section className={`session ${sessionClassName || ''}`}>
            <div className={`container ${containerClassName || ''}`}>{children}</div>
        </section>
    )
}

export default Container
