import { config } from '#config/index.js';
export function getEtherscanApiUrl(network, chain) {
    const url = config[network]?.chains?.[chain]?.etherscanApiUrl;
    if (!url) {
        throw new Error(`etherscan API url not found for chain ${chain}`);
    }
    return url;
}
//# sourceMappingURL=getEtherscanApiUrl.js.map