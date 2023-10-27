import { expect, test } from "bun:test";

const url = process.env.DEPLOYMENT_URL;
if (!url) {
  throw new Error("DEPLOYMENT_URL not set");
}

test("works", async () => {
  const res = await fetch(url);
  if (res.status !== 200) {
    console.log(await res.text());
  }
  expect(res.status).toEqual(200);

  expect(await res.text()).toEqual("isTrue(true) is true");
});
