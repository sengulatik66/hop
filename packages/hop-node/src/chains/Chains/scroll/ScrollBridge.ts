import { Chain } from 'src/constants'
import { ChainBridgeParams } from 'src/chains/AbstractChainBridge'
import { ScrollMessageService } from 'src/chains/Chains/scroll/ScrollMessageService'

export const ScrollZkBridgeParams: ChainBridgeParams = {
  chainSlug: Chain.ScrollZk,
  Message: ScrollMessageService
}