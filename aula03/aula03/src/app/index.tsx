import { Box } from "@/components/ui/box";

import CabecalhoLogin from "../components/CabecalhoLogin";
export default function index() {
  return (
    <Box className="flex-1 bg-neutral-800 justify-center items-center">
      <Box className="w-[420px] p-8 bg-neutral-900 rounded-md">
        <CabecalhoLogin />
      </Box>
    </Box>
  );
}