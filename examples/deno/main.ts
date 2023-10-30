import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { isTrue } from "https://esm.sh/@chronark/sdk@latest";

serve(async (_req: Request) => {
  return new Response(
    JSON.stringify({
      shouldBeTrue: isTrue(true),
      shouldBeFalse: isTrue(false),
    }),
    { status: 200 },
  );
});
