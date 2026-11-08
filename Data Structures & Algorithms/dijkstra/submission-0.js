
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {number[]}
     */
    shortestPath(n, edges, src) {

        let graph = Array.from({length: n}, () => []);

        for (let [u, v, w] of edges) {
            graph[u].push([v, w]);
        }

        let dist = Array(n).fill(Infinity);
        let visited = Array(n).fill(false);

        dist[src] = 0;

        for (let i = 0; i < n; i++) {

            let u = -1;

            for (let j = 0; j < n; j++) {
                if (!visited[j] && (u == -1 || dist[j] < dist[u]))
                    u = j;
            }

            if (u == -1 || dist[u] == Infinity) break;

            visited[u] = true;

            for (let [v, w] of graph[u]) {
                if (dist[u] + w < dist[v])
                    dist[v] = dist[u] + w;
            }
        }

        return dist.map(d => d == Infinity ? -1 : d);
    }
}
