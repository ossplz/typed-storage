export class TypedStorageKey<T> {
    constructor(
        /** A reference to the value's type. */
        private _t: { new(): T },
        /** The key under which to store it. Will have a namespace prepended, if applicable. */
        private _key: string) { }

    public get key(): string { return this._key; }
    public get type(): { new(): T } { return this._t; }
    public get typeName(): string { return this.type.name; }

    public toString(): string {
        return this.key;
    }
}
