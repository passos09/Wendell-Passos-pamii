import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export default function CabecalhoLogin() {
  return (
    <VStack className="mb-2">
      <Heading className="text-white text-2xl font-bold text-center mb-2">
        Boas-vindas de volta!
      </Heading>

      <Text className="text-neutral-400 text-sm text-center mb-6">
        Estamos muito felizes em te ver novamente!
      </Text>
    </VStack>
  );
}