import { Column, Heading } from "@/once-ui/components"
import { ProjectCard } from "@/components"

interface ProjectsProps {
  projects: any[]
  range?: [number, number?]
  category?: string
}

export function Projects({ projects = [], range, category = "all" }: ProjectsProps) {
  if (!projects || !Array.isArray(projects)) {
    return (
        <Column fillWidth gap="m" paddingY="xl" horizontal="center">
          <Heading as="h3" variant="heading-default-m" onBackground="neutral-weak">
            Aucun projet disponible
          </Heading>
        </Column>
    )
  }

  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })

  const filteredProjects =
      category === "all" ? sortedProjects : sortedProjects.filter((project) => project.metadata.category === category)

  const displayedProjects = range
      ? filteredProjects.slice(range[0] - 1, range[1] ?? filteredProjects.length)
      : filteredProjects

  return (
      <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
        {displayedProjects.length > 0 ? (
            displayedProjects.map((post, index) => (
                <ProjectCard
                    priority={index < 2}
                    key={post.slug}
                    href={`work/${post.slug}`}
                    images={post.metadata.images}
                    title={post.metadata.title}
                    description={post.metadata.summary}
                    content={post.content}
                    avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
                    link={post.metadata.link || ""}
                    category={post.metadata.category}
                />
            ))
        ) : (
            <Column fillWidth gap="m" paddingY="xl" horizontal="center">
              <Heading as="h3" variant="heading-default-m" onBackground="neutral-weak">
                Aucun projet dans cette catégorie
              </Heading>
            </Column>
        )}
      </Column>
  )
}
