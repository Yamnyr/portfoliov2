"use client"

import { useState, useEffect } from "react"
import { Column, Flex, Heading, ToggleButton } from "@/once-ui/components"
import { Projects } from "./Projects"

interface ProjectsWithFilterProps {
    allProjects: any[]
    range?: [number, number?]
}

const categories = [
    { id: "all", label: "Tous les projets", icon: "grid" },
    { id: "dev-web", label: "Développement Web", icon: "code" },
    { id: "ui-ux", label: "UI/UX Design", icon: "palette" },
    { id: "ia-data", label: "IA & Data", icon: "brain" },
] as const

export function ProjectsWithFilter({ allProjects, range }: ProjectsWithFilterProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    // Debug: Log des projets et leurs catégories
    useEffect(() => {
        console.log(
            "Tous les projets:",
            allProjects.map((p) => ({
                title: p.metadata.title,
                category: p.metadata.category,
                metadata: p.metadata,
            })),
        )
    }, [allProjects])

    const getProjectCount = (categoryId: string) => {
        if (categoryId === "all") return allProjects.length
        const count = allProjects.filter((project) => {
            const projectCategory = project.metadata.category
            console.log(`Projet ${project.metadata.title}: category="${projectCategory}", recherché="${categoryId}"`)
            return projectCategory === categoryId
        }).length
        console.log(`Catégorie ${categoryId}: ${count} projets`)
        return count
    }

    return (
        <Column fillWidth gap="xl" marginBottom="40">
            {/* Navigation par catégories */}
            <Column fillWidth gap="m" paddingX="l">
                <Heading as="h2" variant="heading-strong-l" marginBottom="s">
                    Mes Projets
                </Heading>
                <Flex fillWidth horizontal="center">
                    <Flex background="surface" border="neutral-medium" radius="m-4" shadow="l" padding="4" horizontal="center">
                        <Flex gap="4" wrap>
                            {categories.map((category) => (
                                <ToggleButton
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    selected={activeCategory === category.id}
                                    prefixIcon={category.icon as any}
                                    label={`${category.label} (${getProjectCount(category.id)})`}
                                />
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Column>

            {/* Composant Projects avec filtrage */}
            <Projects projects={allProjects} category={activeCategory} range={range} />
        </Column>
    )
}
