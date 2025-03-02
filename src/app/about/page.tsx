import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton, RevealFx,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
      <Column maxWidth="m">
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: person.name,
                jobTitle: person.role,
                description: about.intro.description,
                url: `https://${baseURL}/about`,
                image: `${baseURL}/images/${person.avatar}`,
                sameAs: social
                    .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
                    .map((item) => item.link),
                worksFor: {
                  "@type": "Organization",
                  name: about.work.experiences[0].company || "",
                },
              }),
            }}
        />
        {about.tableOfContent.display && (
            <Column
                left="0"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                position="fixed"
                paddingLeft="24"
                gap="32"
                hide="s"
            >
              <TableOfContents structure={structure} about={about} />
            </Column>
        )}

        <RevealFx translateY="12" fillWidth horizontal="start" paddingBottom="m">
        <Flex fillWidth mobileDirection="column" horizontal="center">
          {about.avatar.display && (
              <Column
                  className={styles.avatar}
                  minWidth="160"
                  paddingX="l"
                  paddingBottom="xl"
                  gap="m"
                  flex={3}
                  horizontal="center"
              >
                <Avatar src={person.avatar} size="xl" />
                <Flex gap="8" vertical="center">
                  <Icon onBackground="accent-weak" name="globe" />
                  {person.location}
                </Flex>
                {person.languages.length > 0 && (
                    <Flex wrap gap="8">
                      {person.languages.map((language, index) => (
                          <Tag key={index} size="l">
                            {language}
                          </Tag>
                      ))}
                    </Flex>
                )}
              </Column>
          )}
          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            <Column
                id={about.intro.title}
                fillWidth
                minHeight="160"
                vertical="center"
                marginBottom="32"
            >
              {about.calendar.display && (
                  <Flex
                      fitWidth
                      border="brand-alpha-medium"
                      className={styles.blockAlign}
                      style={{
                        backdropFilter: "blur(var(--static-space-1))",
                      }}
                      background="brand-alpha-weak"
                      radius="full"
                      padding="4"
                      gap="8"
                      marginBottom="m"
                      vertical="center"
                  >
                    <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                    <Flex paddingX="8">Schedule a call</Flex>
                    <IconButton
                        href={about.calendar.link}
                        data-border="rounded"
                        variant="secondary"
                        icon="chevronRight"
                    />
                  </Flex>
              )}
              <Heading className={styles.textAlign} variant="display-strong-xl">
                {person.name}
              </Heading>
              <Text
                  className={styles.textAlign}
                  variant="display-default-xs"
                  onBackground="neutral-weak"
              >
                {person.role}
              </Text>
              {social.length > 0 && (
                  <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                    {social.map(
                        (item) =>
                            item.link && (
                                <>
                                  <Button
                                      className="s-flex-hide"
                                      key={item.name}
                                      href={item.link}
                                      prefixIcon={item.icon}
                                      label={item.name}
                                      size="s"
                                      variant="secondary"
                                  />
                                  <IconButton
                                      className="s-flex-show"
                                      size="l"
                                      key={`${item.name}-icon`}
                                      href={item.link}
                                      icon={item.icon}
                                      variant="secondary"
                                  />
                                </>
                            ),
                    )}
                  </Flex>
              )}
            </Column>

            {about.intro.display && (
                <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                  {about.intro.description}
                </Column>
            )}

            {about.work.display && (
                <>
                  <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                    {about.work.title}
                  </Heading>
                  <Column fillWidth gap="l" marginBottom="40">
                    {about.work.experiences.map((experience, index) => (
                        <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                          <Flex fillWidth horizontal="space-between" vertical="center" marginBottom="4">
                            {/* Conteneur image + infos entreprise */}
                            <Flex horizontal="start" gap="m">
                              {/* Image de l'entreprise avec un espace sous elle */}
                              {experience.images.length > 0 && (
                                  <Flex
                                      marginBottom="s"
                                      // border="neutral-medium"
                                      radius="m"
                                      direction="column"
                                      //@ts-ignore
                                      minWidth={experience.images[0].width}
                                      //@ts-ignore
                                      height={experience.images[0].height}
                                  >
                                    <SmartImage
                                        enlarge
                                        radius="m"
                                        //@ts-ignore
                                        sizes={experience.images[0].width.toString()}
                                        //@ts-ignore
                                        alt={experience.images[0].alt}
                                        //@ts-ignore
                                        src={experience.images[0].src}
                                    />
                                  </Flex>
                              )}
                              {/* Informations entreprise et rôle */}
                              <Flex direction="column">
                                <Text id={experience.company} variant="heading-strong-l">
                                  {experience.company}
                                </Text>
                                <Text variant="body-default-s" onBackground="brand-weak">
                                  {experience.role}
                                </Text>
                              </Flex>
                            </Flex>
                            {/* Timeframe complètement à droite */}
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                              {experience.timeframe}
                            </Text>
                          </Flex>
                          {/* Liste des achievements */}
                          <Column as="ul" gap="16">
                            {experience.achievements.map((achievement: JSX.Element, index: number) => (
                                <Text as="li" variant="body-default-m" key={`${experience.company}-${index}`}>
                                  {achievement}
                                </Text>
                            ))}
                          </Column>
                        </Column>
                    ))}
                  </Column>
                </>

            )}

            {about.studies.display && (
                <>
                  <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                    {about.studies.title}
                  </Heading>
                  <Column fillWidth gap="l" marginBottom="40">
                    {about.studies.institutions.map((institution, index) => (
                        <Flex key={`${institution.name}-${index}`} fillWidth horizontal="start" vertical="center" gap="m">
                          {/* Image de l'établissement */}
                          {institution.images.length > 0 && (
                              <Flex
                                  // border="neutral-medium"
                                  radius="m"
                                  direction="column"
                                  //@ts-ignore
                                  minWidth={institution.images[0].width} // Ajustement de la taille
                                  //@ts-ignore
                                  height={institution.images[0].height}
                              >
                                <SmartImage
                                    enlarge
                                    radius="m"
                                    //@ts-ignore
                                    sizes={(institution.images[0].width * 10).toString()}
                                    //@ts-ignore
                                    alt={institution.images[0].alt}
                                    //@ts-ignore
                                    src={institution.images[0].src}
                                />
                              </Flex>
                          )}
                          {/* Informations établissement */}
                          <Column gap="4">
                            <Text id={institution.name} variant="heading-strong-l">
                              {institution.name}
                            </Text>
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                              {institution.description}
                            </Text>
                          </Column>
                        </Flex>
                    ))}
                  </Column>
                </>
            )}


            {about.technical.display && (
                <>
                  <Heading
                      as="h2"
                      id={about.technical.title}
                      variant="display-strong-s"
                      marginBottom="40"
                  >
                    {about.technical.title}
                  </Heading>
                  <Column fillWidth gap="l">
                    {about.technical.skills.map((skill, index) => (
                        <Column key={`${skill}-${index}`} fillWidth gap="4">
                          {/* Si une seule image, on aligne à côté */}
                          {skill.images && skill.images.length === 1 ? (
                              <Flex fillWidth horizontal="start" vertical="center" gap="m">
                                {/* Image unique à gauche */}
                                <Flex
                                    border="neutral-medium"
                                    radius="m"
                                    //@ts-ignore
                                    minWidth={skill.images[0].width}
                                    //@ts-ignore
                                    height={skill.images[0].height}
                                >
                                  <SmartImage
                                      enlarge
                                      radius="m"
                                      //@ts-ignore
                                      sizes={skill.images[0].width.toString()}
                                      //@ts-ignore
                                      alt={skill.images[0].alt}
                                      //@ts-ignore
                                      src={skill.images[0].src}
                                  />
                                </Flex>
                                {/* Informations skill */}
                                <Column gap="2">
                                  <Text variant="heading-strong-l">{skill.title}</Text>
                                  <Text variant="body-default-m" onBackground="neutral-weak">
                                    {skill.description}
                                  </Text>
                                </Column>
                              </Flex>
                          ) : (
                              // Si plusieurs images ou aucune, affichage classique
                              <>
                                <Text variant="heading-strong-l">{skill.title}</Text>
                                <Text variant="body-default-m" onBackground="neutral-weak">
                                  {skill.description}
                                </Text>
                                {skill.images && skill.images.length > 0 && (
                                    <Flex fillWidth paddingTop="m" gap="12" wrap>
                                      {skill.images.map((image, index) => (
                                          <Flex
                                              key={index}
                                              border="neutral-medium"
                                              radius="m"
                                              //@ts-ignore
                                              minWidth={image.width}
                                              //@ts-ignore
                                              height={image.height}
                                          >
                                            <SmartImage
                                                enlarge
                                                radius="m"
                                                //@ts-ignore
                                                sizes={image.width.toString()}
                                                //@ts-ignore
                                                alt={image.alt}
                                                //@ts-ignore
                                                src={image.src}
                                            />
                                          </Flex>
                                      ))}
                                    </Flex>
                                )}
                              </>
                          )}
                        </Column>
                    ))}
                  </Column>
                </>
            )}

          </Column>
        </Flex>
        </RevealFx>
      </Column>
  );
}
