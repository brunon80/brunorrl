import React, { useEffect, useRef } from 'react'

type ContainerProps = {
    containerClassName?: string
    sessionClassName?: string
    id?: string
}

const Container: React.FC<ContainerProps> = ({ children, containerClassName, sessionClassName, id }) => {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (!section || prefersReducedMotion || !('IntersectionObserver' in window)) {
            return
        }

        section.classList.add('session-reveal')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add('session-visible')
                    observer.unobserve(section)
                }
            })
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id={id} className={`session flex flex-col relative overflow-hidden ${sessionClassName || ''}`}>
            <div className={`w-full mx-auto flex flex-1 flex-col justify-center px-6 md:px-8 max-w-[1200px] py-12 md:py-20 lg:py-24 ${containerClassName || ''}`}>{children}</div>
        </section>
    )
}

export default Container