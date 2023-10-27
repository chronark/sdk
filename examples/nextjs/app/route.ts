import { isTrue } from "@chronark/sdk";

export const runtime = "edge";

/**
 * This is obviously a ridiculous route, but the only thing we care about is that our code can run
 * in this environment
 */
export function GET(_req: Request): Response {
  return Response.json({
    shouldBeTrue: isTrue(true),
    shouldBeFalse: isTrue(false),
    });
}
