/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common.js";

export interface IGlobalInboxInterface extends utils.Interface {
  functions: {
    "deployL2ContractPair(address,uint256,uint256,uint256,bytes)": FunctionFragment;
    "getInbox(address)": FunctionFragment;
    "sendInitializationMessage(bytes)": FunctionFragment;
    "sendL2Message(address,bytes)": FunctionFragment;
    "sendMessages(bytes,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deployL2ContractPair"
      | "getInbox"
      | "sendInitializationMessage"
      | "sendL2Message"
      | "sendMessages"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployL2ContractPair",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getInbox",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendInitializationMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL2Message",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessages",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployL2ContractPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getInbox", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendInitializationMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL2Message",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessages",
    data: BytesLike
  ): Result;

  events: {
    "BuddyContractDeployed(address,bytes)": EventFragment;
    "BuddyContractPair(address,address)": EventFragment;
    "MessageDelivered(address,uint8,address,uint256,bytes)": EventFragment;
    "MessageDeliveredFromOrigin(address,uint8,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuddyContractDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuddyContractPair"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageDelivered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageDeliveredFromOrigin"): EventFragment;
}

export interface BuddyContractDeployedEventObject {
  sender: string;
  data: string;
}
export type BuddyContractDeployedEvent = TypedEvent<
  [string, string],
  BuddyContractDeployedEventObject
>;

export type BuddyContractDeployedEventFilter =
  TypedEventFilter<BuddyContractDeployedEvent>;

export interface BuddyContractPairEventObject {
  sender: string;
  data: string;
}
export type BuddyContractPairEvent = TypedEvent<
  [string, string],
  BuddyContractPairEventObject
>;

export type BuddyContractPairEventFilter =
  TypedEventFilter<BuddyContractPairEvent>;

export interface MessageDeliveredEventObject {
  chain: string;
  kind: number;
  sender: string;
  inboxSeqNum: BigNumber;
  data: string;
}
export type MessageDeliveredEvent = TypedEvent<
  [string, number, string, BigNumber, string],
  MessageDeliveredEventObject
>;

export type MessageDeliveredEventFilter =
  TypedEventFilter<MessageDeliveredEvent>;

export interface MessageDeliveredFromOriginEventObject {
  chain: string;
  kind: number;
  sender: string;
  inboxSeqNum: BigNumber;
}
export type MessageDeliveredFromOriginEvent = TypedEvent<
  [string, number, string, BigNumber],
  MessageDeliveredFromOriginEventObject
>;

export type MessageDeliveredFromOriginEventFilter =
  TypedEventFilter<MessageDeliveredFromOriginEvent>;

export interface IGlobalInbox extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGlobalInboxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deployL2ContractPair(
      chain: PromiseOrValue<string>,
      maxGas: PromiseOrValue<BigNumberish>,
      gasPriceBid: PromiseOrValue<BigNumberish>,
      payment: PromiseOrValue<BigNumberish>,
      contractData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getInbox(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    sendInitializationMessage(
      messageData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendL2Message(
      chain: PromiseOrValue<string>,
      messageData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendMessages(
      _messages: PromiseOrValue<BytesLike>,
      initialMaxSendCount: PromiseOrValue<BigNumberish>,
      finalMaxSendCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deployL2ContractPair(
    chain: PromiseOrValue<string>,
    maxGas: PromiseOrValue<BigNumberish>,
    gasPriceBid: PromiseOrValue<BigNumberish>,
    payment: PromiseOrValue<BigNumberish>,
    contractData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getInbox(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  sendInitializationMessage(
    messageData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendL2Message(
    chain: PromiseOrValue<string>,
    messageData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendMessages(
    _messages: PromiseOrValue<BytesLike>,
    initialMaxSendCount: PromiseOrValue<BigNumberish>,
    finalMaxSendCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployL2ContractPair(
      chain: PromiseOrValue<string>,
      maxGas: PromiseOrValue<BigNumberish>,
      gasPriceBid: PromiseOrValue<BigNumberish>,
      payment: PromiseOrValue<BigNumberish>,
      contractData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getInbox(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    sendInitializationMessage(
      messageData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendL2Message(
      chain: PromiseOrValue<string>,
      messageData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessages(
      _messages: PromiseOrValue<BytesLike>,
      initialMaxSendCount: PromiseOrValue<BigNumberish>,
      finalMaxSendCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BuddyContractDeployed(address,bytes)"(
      sender?: PromiseOrValue<string> | null,
      data?: null
    ): BuddyContractDeployedEventFilter;
    BuddyContractDeployed(
      sender?: PromiseOrValue<string> | null,
      data?: null
    ): BuddyContractDeployedEventFilter;

    "BuddyContractPair(address,address)"(
      sender?: PromiseOrValue<string> | null,
      data?: null
    ): BuddyContractPairEventFilter;
    BuddyContractPair(
      sender?: PromiseOrValue<string> | null,
      data?: null
    ): BuddyContractPairEventFilter;

    "MessageDelivered(address,uint8,address,uint256,bytes)"(
      chain?: PromiseOrValue<string> | null,
      kind?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      inboxSeqNum?: null,
      data?: null
    ): MessageDeliveredEventFilter;
    MessageDelivered(
      chain?: PromiseOrValue<string> | null,
      kind?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      inboxSeqNum?: null,
      data?: null
    ): MessageDeliveredEventFilter;

    "MessageDeliveredFromOrigin(address,uint8,address,uint256)"(
      chain?: PromiseOrValue<string> | null,
      kind?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      inboxSeqNum?: null
    ): MessageDeliveredFromOriginEventFilter;
    MessageDeliveredFromOrigin(
      chain?: PromiseOrValue<string> | null,
      kind?: PromiseOrValue<BigNumberish> | null,
      sender?: PromiseOrValue<string> | null,
      inboxSeqNum?: null
    ): MessageDeliveredFromOriginEventFilter;
  };

  estimateGas: {
    deployL2ContractPair(
      chain: PromiseOrValue<string>,
      maxGas: PromiseOrValue<BigNumberish>,
      gasPriceBid: PromiseOrValue<BigNumberish>,
      payment: PromiseOrValue<BigNumberish>,
      contractData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getInbox(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendInitializationMessage(
      messageData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendL2Message(
      chain: PromiseOrValue<string>,
      messageData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendMessages(
      _messages: PromiseOrValue<BytesLike>,
      initialMaxSendCount: PromiseOrValue<BigNumberish>,
      finalMaxSendCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployL2ContractPair(
      chain: PromiseOrValue<string>,
      maxGas: PromiseOrValue<BigNumberish>,
      gasPriceBid: PromiseOrValue<BigNumberish>,
      payment: PromiseOrValue<BigNumberish>,
      contractData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getInbox(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendInitializationMessage(
      messageData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendL2Message(
      chain: PromiseOrValue<string>,
      messageData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendMessages(
      _messages: PromiseOrValue<BytesLike>,
      initialMaxSendCount: PromiseOrValue<BigNumberish>,
      finalMaxSendCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
