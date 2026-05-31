class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== (n - 1)) return false;
        const parent = Array.from({ length: n}, (_, ind) => ind);
        const count = Array.from({ length: n}, () => 1);
        const find = (x) => {
            if (x !== parent[x]) parent[x] = find(parent[x]);
            return parent[x];
        }
        const union = (x, y) => {
            const xParent = find(x), yParent = find(y);
            if (xParent === yParent) return false;
            if (count[xParent] < count[yParent]) {
                parent[xParent] = yParent;
                count[yParent] += count[xParent];
            } else {
                parent[yParent] = xParent;
                count[xParent] += count[yParent];
            }
            return true;
        }
        for (const edge of edges) {
            if (!union(edge[0], edge[1])) return false;
        }
        return true;
    }
}
