import { useEffect, useState } from 'react'

const useActiveSection = (sectionIds: string[], initialSection: string): string => {
    const [activeSection, setActiveSection] = useState(initialSection)

    useEffect(() => {
        const observedSections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null)

        if (!('IntersectionObserver' in window) || observedSections.length === 0) {
            return
        }

        const intersectionRatios = new Map<string, number>()
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                intersectionRatios.set(
                    entry.target.id,
                    entry.isIntersecting ? entry.intersectionRatio : 0
                )
            })

            const mostVisibleSection = Array.from(intersectionRatios.entries())
                .filter(([, ratio]) => ratio > 0)
                .sort((first, second) => second[1] - first[1])[0]

            if (mostVisibleSection) {
                setActiveSection(mostVisibleSection[0])
            }
        }, { threshold: [0, 0.1, 0.25, 0.5, 0.75], rootMargin: '-25% 0px -45% 0px' })

        observedSections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [sectionIds])

    return activeSection
}

export default useActiveSection
