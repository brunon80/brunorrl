import React from 'react'

type ContainerProps = {
    containerClassName?: string
    sessionClassName?: string
}

const Container: React.FC<ContainerProps> = ({ children, containerClassName, sessionClassName }) => {
    return (
        <section className={`session flex flex-col relative overflow-hidden ${sessionClassName || ''}`}>
            <div className={`w-full mx-auto px-6 md:px-8 max-w-[1200px] py-12 md:py-20 lg:py-24 ${containerClassName || ''}`}>{children}</div>
        </section>
    )
}

export default Container