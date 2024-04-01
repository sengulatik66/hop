// @ts-expect-error No types as of 20240128
import BlockDater from 'ethereum-block-by-date';
import { DateTime } from 'luxon';
import { fetchJsonOrThrow } from './fetchJsonOrThrow.js';
import { getEtherscanApiKey } from './getEtherscanApiKey.js';
import { getEtherscanApiUrl } from './getEtherscanApiUrl.js';
export async function getBlockNumberFromDate(chain, timestamp) {
    const chainSlug = chain.slug;
    const chainProvider = chain.provider;
    const useEtherscan = getEtherscanApiKey('mainnet', chainSlug);
    if (useEtherscan) {
        return getBlockNumberFromDateUsingEtherscan(chainSlug, timestamp);
    }
    return getBlockNumberFromDateUsingLib(chainProvider, timestamp);
}
export async function getBlockNumberFromDateUsingEtherscan(chain, timestamp) {
    const apiKey = getEtherscanApiKey('mainnet', chain);
    if (!apiKey) {
        throw new Error('Please add an etherscan api key for ' + chain);
    }
    const baseUrl = getEtherscanApiUrl('mainnet', chain);
    if (!baseUrl) {
        throw new Error(`etherscan base url not found for chain ${chain}`);
    }
    const url = baseUrl + `/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${apiKey}`;
    const json = await fetchJsonOrThrow(url);
    if (json.status !== '1') {
        throw new Error(`could not retrieve block number for timestamp ${timestamp}: ${JSON.stringify(json)}`);
    }
    return Number(json.result);
}
export async function getBlockNumberFromDateUsingLib(provider, timestamp) {
    const blockDater = new BlockDater(provider);
    const date = DateTime.fromSeconds(timestamp).toJSDate();
    let retryCount = 0;
    let info;
    while (true) {
        try {
            info = blockDater.getDate(date);
            if (!info) {
                throw new Error('could not retrieve block number');
            }
        }
        catch (err) {
            retryCount++;
            // console.warn(`getBlockNumberFromDate: retrying ${retryCount}`)
            if (retryCount < 5)
                continue;
            break;
        }
        break;
    }
    if (!info) {
        throw new Error('could not retrieve block number');
    }
    return info.block;
}
//# sourceMappingURL=getBlockNumberFromDate.js.map