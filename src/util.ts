import BigNumber from 'bignumber.js'

export function numberWithCommas(x: number) {
    return x.toLocaleString()
}

export const toNano = (x: number) => {
    return new BigNumber(x).shiftedBy(9).toString()
}

export const fromNano = (x: string) => {
    return new BigNumber(x).shiftedBy(-9).toNumber()
}
