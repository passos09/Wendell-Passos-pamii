import { Heading, Text, VStack } from "@gluestack-ui/themed";

export default function CabecalhoLogin() {
  return (
    <VStack mb="$2">
      <Heading color="$white" size="2xl" textAlign="center" mb="$2">
        Boas-vindas de volta!
      </Heading>

      <Text color="$trueGray400" size="sm" textAlign="center" mb="$6">
        Estamos muito felizes em te ver novamente!
      </Text>
    </VStack>
  );
}