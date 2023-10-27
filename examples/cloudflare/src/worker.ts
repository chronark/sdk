import { isTrue } from "@chronark/sdk";

export interface Env {
  WE_DONT_NEED_ENV?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return Response.json({
      shouldBeTrue: isTrue(true),
      shouldBeFalse: isTrue(false),
    });
  },
};
