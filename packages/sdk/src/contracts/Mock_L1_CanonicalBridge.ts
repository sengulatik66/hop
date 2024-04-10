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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common.js";

export interface Mock_L1_CanonicalBridgeInterface extends utils.Interface {
  functions: {
    "canonicalToken()": FunctionFragment;
    "messenger()": FunctionFragment;
    "sendMessage(address,bytes)": FunctionFragment;
    "sendTokens(address,address,uint256,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "canonicalToken"
      | "messenger"
      | "sendMessage"
      | "sendTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "canonicalToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "canonicalToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendTokens", data: BytesLike): Result;

  events: {};
}

export interface Mock_L1_CanonicalBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Mock_L1_CanonicalBridgeInterface;

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
    canonicalToken(overrides?: CallOverrides): Promise<[string]>;

    messenger(overrides?: CallOverrides): Promise<[string]>;

    sendMessage(
      _target: PromiseOrValue<string>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendTokens(
      _target: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      isPolygon: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  canonicalToken(overrides?: CallOverrides): Promise<string>;

  messenger(overrides?: CallOverrides): Promise<string>;

  sendMessage(
    _target: PromiseOrValue<string>,
    _message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendTokens(
    _target: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    isPolygon: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    canonicalToken(overrides?: CallOverrides): Promise<string>;

    messenger(overrides?: CallOverrides): Promise<string>;

    sendMessage(
      _target: PromiseOrValue<string>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendTokens(
      _target: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      isPolygon: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    canonicalToken(overrides?: CallOverrides): Promise<BigNumber>;

    messenger(overrides?: CallOverrides): Promise<BigNumber>;

    sendMessage(
      _target: PromiseOrValue<string>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendTokens(
      _target: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      isPolygon: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canonicalToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendMessage(
      _target: PromiseOrValue<string>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendTokens(
      _target: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      isPolygon: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}