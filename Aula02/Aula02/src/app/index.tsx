import { Box } from "@/components/ui/box";

import Logo from "../components/Logo";
import CabecalhoLogin from "../components/CabecalhoLogin";
import FormularioLogin from "../components/FormularioLogin";

export default function index() {
  return (
    <Box className="flex-1 bg-neutral-800 justify-start items-center pt-24">
      <Logo />

      <Box className="w-[420px] p-8 bg-neutral-900 rounded-md">
        <CabecalhoLogin />
        <FormularioLogin />
      </Box>
    </Box>
  );
}