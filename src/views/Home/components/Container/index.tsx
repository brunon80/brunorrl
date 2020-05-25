import React from 'react'

type ContainerProps = {
    containerClassName?: string
}

const Container: React.FC<ContainerProps> = ({ children, containerClassName }) => {
    return (
        <section className="section">
            <div className={`container ${containerClassName}`}>{children}</div>
        </section>
    )
}

export default Container
