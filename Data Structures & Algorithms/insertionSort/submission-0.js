
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        let result = [];

        for (let i = 0; i < pairs.length; i++) {

            let key = pairs[i];
            let j = i - 1;

            while (j >= 0 && pairs[j].key > key.key) {
                pairs[j + 1] = pairs[j];
                j--;
            }

            pairs[j + 1] = key;

            result.push(pairs.map(pair => ({...pair})));
        }

        return result;
    }
}
