import { Box } from "@gluestack-ui/themed";

import CabecalhoLogin from "./components/CabecalhoLogin";

export default function index() {
  return (
    <Box
      flex={1}
      bg="$backgroundDark800"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={420}
        p="$8"
        bg="$backgroundDark900"
        borderRadius="$md"
      >
        <CabecalhoLogin />
      </Box>
    </Box>
  );
}