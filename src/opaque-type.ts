declare const b: unique symbol;

interface Brand<Tag> {
	readonly [b]: Tag;
}

/**
 * Creates an opaque type, which hides its internal details from the public, and can only be created by being used explicitly.
 *
 * @example
 * type AccountId = Opaque<number, "AccountId">;
 * const createAccountId = () => 1 as AccountId;
 */
export type Opaque<BaseType, Tag = unknown> = BaseType & Brand<Tag>;
