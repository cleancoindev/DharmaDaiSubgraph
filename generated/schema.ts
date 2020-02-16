// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get underlyingAmount(): BigInt {
    let value = this.get("underlyingAmount");
    return value.toBigInt();
  }

  set underlyingAmount(value: BigInt) {
    this.set("underlyingAmount", Value.fromBigInt(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Approval entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Approval entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Approval", id.toString(), this);
  }

  static load(id: string): Approval | null {
    return store.get("Approval", id) as Approval | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get spender(): string {
    let value = this.get("spender");
    return value.toString();
  }

  set spender(value: string) {
    this.set("spender", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Mint entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Mint entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Mint", id.toString(), this);
  }

  static load(id: string): Mint | null {
    return store.get("Mint", id) as Mint | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get minter(): string {
    let value = this.get("minter");
    return value.toString();
  }

  set minter(value: string) {
    this.set("minter", Value.fromString(value));
  }

  get dai(): BigInt {
    let value = this.get("dai");
    return value.toBigInt();
  }

  set dai(value: BigInt) {
    this.set("dai", Value.fromBigInt(value));
  }

  get dDai(): BigInt {
    let value = this.get("dDai");
    return value.toBigInt();
  }

  set dDai(value: BigInt) {
    this.set("dDai", Value.fromBigInt(value));
  }
}

export class Redeem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Redeem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Redeem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Redeem", id.toString(), this);
  }

  static load(id: string): Redeem | null {
    return store.get("Redeem", id) as Redeem | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get redeemer(): string {
    let value = this.get("redeemer");
    return value.toString();
  }

  set redeemer(value: string) {
    this.set("redeemer", Value.fromString(value));
  }

  get dai(): BigInt {
    let value = this.get("dai");
    return value.toBigInt();
  }

  set dai(value: BigInt) {
    this.set("dai", Value.fromBigInt(value));
  }

  get dDai(): BigInt {
    let value = this.get("dDai");
    return value.toBigInt();
  }

  set dDai(value: BigInt) {
    this.set("dDai", Value.fromBigInt(value));
  }
}

export class Accrue extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Accrue entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Accrue entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Accrue", id.toString(), this);
  }

  static load(id: string): Accrue | null {
    return store.get("Accrue", id) as Accrue | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dDaiExchangeRate(): BigInt {
    let value = this.get("dDaiExchangeRate");
    return value.toBigInt();
  }

  set dDaiExchangeRate(value: BigInt) {
    this.set("dDaiExchangeRate", Value.fromBigInt(value));
  }

  get cDaiExchangeRate(): BigInt {
    let value = this.get("cDaiExchangeRate");
    return value.toBigInt();
  }

  set cDaiExchangeRate(value: BigInt) {
    this.set("cDaiExchangeRate", Value.fromBigInt(value));
  }
}

export class CollectSurplus extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CollectSurplus entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CollectSurplus entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CollectSurplus", id.toString(), this);
  }

  static load(id: string): CollectSurplus | null {
    return store.get("CollectSurplus", id) as CollectSurplus | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dai(): BigInt {
    let value = this.get("dai");
    return value.toBigInt();
  }

  set dai(value: BigInt) {
    this.set("dai", Value.fromBigInt(value));
  }

  get cDai(): BigInt {
    let value = this.get("cDai");
    return value.toBigInt();
  }

  set cDai(value: BigInt) {
    this.set("cDai", Value.fromBigInt(value));
  }
}

export class Summary extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Summary entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Summary entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Summary", id.toString(), this);
  }

  static load(id: string): Summary | null {
    return store.get("Summary", id) as Summary | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get version(): BigInt {
    let value = this.get("version");
    return value.toBigInt();
  }

  set version(value: BigInt) {
    this.set("version", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get totalSupplyUnderlying(): BigInt {
    let value = this.get("totalSupplyUnderlying");
    return value.toBigInt();
  }

  set totalSupplyUnderlying(value: BigInt) {
    this.set("totalSupplyUnderlying", Value.fromBigInt(value));
  }

  get exchangeRate(): BigInt {
    let value = this.get("exchangeRate");
    return value.toBigInt();
  }

  set exchangeRate(value: BigInt) {
    this.set("exchangeRate", Value.fromBigInt(value));
  }

  get supplyRatePerBlock(): BigInt {
    let value = this.get("supplyRatePerBlock");
    return value.toBigInt();
  }

  set supplyRatePerBlock(value: BigInt) {
    this.set("supplyRatePerBlock", Value.fromBigInt(value));
  }

  get totalInterestEarned(): BigInt {
    let value = this.get("totalInterestEarned");
    return value.toBigInt();
  }

  set totalInterestEarned(value: BigInt) {
    this.set("totalInterestEarned", Value.fromBigInt(value));
  }

  get lastAccrual(): BigInt {
    let value = this.get("lastAccrual");
    return value.toBigInt();
  }

  set lastAccrual(value: BigInt) {
    this.set("lastAccrual", Value.fromBigInt(value));
  }

  get spreadPerBlock(): BigInt {
    let value = this.get("spreadPerBlock");
    return value.toBigInt();
  }

  set spreadPerBlock(value: BigInt) {
    this.set("spreadPerBlock", Value.fromBigInt(value));
  }

  get currentCDaiSurplus(): BigInt {
    let value = this.get("currentCDaiSurplus");
    return value.toBigInt();
  }

  set currentCDaiSurplus(value: BigInt) {
    this.set("currentCDaiSurplus", Value.fromBigInt(value));
  }

  get currentDaiSurplus(): BigInt {
    let value = this.get("currentDaiSurplus");
    return value.toBigInt();
  }

  set currentDaiSurplus(value: BigInt) {
    this.set("currentDaiSurplus", Value.fromBigInt(value));
  }

  get cumulativeCDaiSurplus(): BigInt {
    let value = this.get("cumulativeCDaiSurplus");
    return value.toBigInt();
  }

  set cumulativeCDaiSurplus(value: BigInt) {
    this.set("cumulativeCDaiSurplus", Value.fromBigInt(value));
  }

  get cumulativeDaiSurplus(): BigInt {
    let value = this.get("cumulativeDaiSurplus");
    return value.toBigInt();
  }

  set cumulativeDaiSurplus(value: BigInt) {
    this.set("cumulativeDaiSurplus", Value.fromBigInt(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get balanceUnderlying(): BigInt {
    let value = this.get("balanceUnderlying");
    return value.toBigInt();
  }

  set balanceUnderlying(value: BigInt) {
    this.set("balanceUnderlying", Value.fromBigInt(value));
  }

  get totalInterestEarned(): BigInt {
    let value = this.get("totalInterestEarned");
    return value.toBigInt();
  }

  set totalInterestEarned(value: BigInt) {
    this.set("totalInterestEarned", Value.fromBigInt(value));
  }

  get transfersIn(): Array<string> {
    let value = this.get("transfersIn");
    return value.toStringArray();
  }

  set transfersIn(value: Array<string>) {
    this.set("transfersIn", Value.fromStringArray(value));
  }

  get transfersOut(): Array<string> {
    let value = this.get("transfersOut");
    return value.toStringArray();
  }

  set transfersOut(value: Array<string>) {
    this.set("transfersOut", Value.fromStringArray(value));
  }

  get mintEvents(): Array<string> {
    let value = this.get("mintEvents");
    return value.toStringArray();
  }

  set mintEvents(value: Array<string>) {
    this.set("mintEvents", Value.fromStringArray(value));
  }

  get redeemEvents(): Array<string> {
    let value = this.get("redeemEvents");
    return value.toStringArray();
  }

  set redeemEvents(value: Array<string>) {
    this.set("redeemEvents", Value.fromStringArray(value));
  }

  get allowances(): Array<string> {
    let value = this.get("allowances");
    return value.toStringArray();
  }

  set allowances(value: Array<string>) {
    this.set("allowances", Value.fromStringArray(value));
  }

  get approvals(): Array<string> {
    let value = this.get("approvals");
    return value.toStringArray();
  }

  set approvals(value: Array<string>) {
    this.set("approvals", Value.fromStringArray(value));
  }

  get lastAction(): BigInt {
    let value = this.get("lastAction");
    return value.toBigInt();
  }

  set lastAction(value: BigInt) {
    this.set("lastAction", Value.fromBigInt(value));
  }
}