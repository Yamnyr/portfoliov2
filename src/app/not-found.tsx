import { Column, Heading, Text } from "@/once-ui/components";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
          Page non trouvée
      </Heading>
      <Text onBackground="neutral-weak">La page demandée n’existe pas.</Text>
    </Column>
  );
}
