import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export default function FormularioLogin() {
  return (
    <VStack className="gap-4">
      <VStack className="gap-1">
        <Text className="text-neutral-300 text-xs font-bold uppercase">
          Email ou número de telefone
        </Text>
        <Input className="bg-neutral-950 border-0 rounded h-11">
          <InputField
            className="text-white px-3"
            placeholder=""
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Input>
      </VStack>

      <VStack className="gap-1">
        <Text className="text-neutral-300 text-xs font-bold uppercase">
          Senha
        </Text>
        <Input className="bg-neutral-950 border-0 rounded h-11">
          <InputField
            className="text-white px-3"
            placeholder=""
            secureTextEntry
          />
        </Input>

        <Pressable>
          <Text className="text-blue-400 text-xs font-medium mt-1">
            Esqueceu sua senha?
          </Text>
        </Pressable>
      </VStack>

      <Button className="bg-[#5865F2] rounded h-11 mt-2">
        <ButtonText className="text-white font-bold text-base">
          Entrar
        </ButtonText>
      </Button>
    </VStack>
  );
}