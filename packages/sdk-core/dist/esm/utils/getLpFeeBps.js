import { BigNumber } from 'ethers';
import { Chain } from '#models/index.js';
// TODO: This is a temporary solution. Should retrieve from onchain and cache value.
const defaultFeeBps = 4;
const customFeeBps = {
    [Chain.PolygonZk.slug]: 1,
    [Chain.Nova.slug]: 1
};
export function getLpFeeBps(chain) {
    if (customFeeBps[chain.slug]) {
        return BigNumber.from(customFeeBps[chain.slug]);
    }
    return BigNumber.from(defaultFeeBps);
}
//# sourceMappingURL=getLpFeeBps.js.map