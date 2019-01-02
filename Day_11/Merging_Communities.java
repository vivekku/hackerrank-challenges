import java.io.*;
import java.util.*;

public class Solution {
    
    static class DisjointSet {
        int[] parent;
        int[] size;
        
        DisjointSet(int n) {
            parent = new int[n+1];
            size = new int[n+1];
            for(int i = 0; i <= n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }
        public boolean connected(int p, int q) {
            return find(p) == find(q);
        }
        
        private int find(int p) {
            int root = p;
            while (root != parent[root]) {
            	parent[root]=parent[parent[root]];
            	root=parent[root];
            }
            return root;
        }
            
        public void union(int p, int q) {
            int rootP = find(p);
            int rootQ = find(q);
            if (rootP == rootQ) return;
            
            if (size[rootP] < size[rootQ]) {
                parent[rootP] = rootQ;                
                size[rootQ] += size[rootP];
            }
            else {
                parent[rootQ] = rootP;
                size[rootP] += size[rootQ];
            }
        }
        
        public int size(int p) {
            int rootP = find(p);
            return size[rootP];
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int q = sc.nextInt();
        DisjointSet dSet = new DisjointSet(n);
        for(int i = 0; i < q; i++) {
            String op = sc.next();
            switch(op) {
                case "Q" :
                    int p = sc.nextInt();
                    System.out.println(dSet.size(p));
                    break;
                case "M" :
                    int a = sc.nextInt();
                    int b = sc.nextInt();
                    dSet.union(a, b);
                    break;
            }
        }
    }
}