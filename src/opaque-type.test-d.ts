import { assertType, test } from "vitest";
import type { Opaque } from "./opaque-type.ts";

test("opaque types are not interchangeable", () => {
	type AccountId = Opaque<number, "AccountId">;
	type UserId = Opaque<number, "UserId">;

	// @ts-expect-error
	assertType<AccountId>(1 as UserId);

	// @ts-expect-error
	assertType<UserId>(1 as AccountId);
});
