import { RuleTester } from "@typescript-eslint/utils/dist/ts-eslint";
import { it } from "vitest";

import rule, { RULE_NAME } from "./no-inline-type-import";

const valids = [
  "import type { a } from \"foo\";",
];
const invalids = [
  [
    "import { type a } from \"foo\";",
    "import type { a } from \"foo\";",
  ],
];

it("runs", () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
  });

  ruleTester.run(RULE_NAME, rule, {
    valid: valids,
    invalid: invalids.map(i => ({
      code: i[0],
      output: i[1],
      errors: [
        { messageId: "noInlineTypeImport" },
      ],
    })),
  });
});