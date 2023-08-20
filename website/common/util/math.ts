import { chunk, flatten } from "lodash";

/**
 * Returns an array of [*fillLength*] numbers [*inSequence*] [*startingFrom*] zero by default eg:
 * * secuenceBy(12,5) -> [1,2,3,4,5,1,2,3,4,5,1,2]
 * * secuenceBy(4, 8) -> [1,2,3,4]
 * * secuenceBy(10, 3) -> [1,2,3,1,2,3,1,2,3,1]
 * * secuenceBy(10, 3, true) -> [0,1,2,0,1,2,0,1,2,0]
 */
export function sequenceBy(length: number, inSequence: number, startingFrom = 0): number[] {
    return flatten(
        chunk(Array(length), inSequence)
        .map((inner) => inner.reduce((p, _, i) => [...p, startingFrom + i], [])))
}