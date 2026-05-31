class Solution {
    dfs(root, start, visited) {
        const stack = [start];
        while (stack.length > 0) {
            const current = stack.pop();
            for (const neighbor of root[current]) {
                if (visited.has(neighbor)) continue;
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
        return true;
    }
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        const graph = Array.from({ length: n }, () => []);
        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }
        const visited = new Set([0]);
        this.dfs(graph, 0, visited);
        return visited.size === n;
    }
}
