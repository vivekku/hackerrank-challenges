import java.io.*;
import java.util.*;

class DisjointSet {
    DisjointSet parent = this;
    int size = 1;    
    DisjointSet findRoot() {
        if (parent != this) {
            parent = parent.findRoot();
        }        
        return parent;
    }    
    void union(DisjointSet other) {
        if (other == this) return;        
        DisjointSet root = findRoot();
        DisjointSet otherRoot = other.findRoot();        
        if (otherRoot == root) return;
        if (root.size >= otherRoot.size) {
            otherRoot.parent = root;
            root.size += otherRoot.size;
        }
        else {
            root.parent = otherRoot;
            otherRoot.size += root.size;
        }
    }
}

public class Solution {
    final static long mod = 1_000_000_007;    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);        
        int n = scanner.nextInt();
        DisjointSet[] components = new DisjointSet[n + 1];        
        for (int i = 0; i < n - 1; i++) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            char color = scanner.next().charAt(0);
            if (color == 'r') continue;            
            DisjointSet aComponent = createComponentIfNeeded(components, a);
            DisjointSet bComponent = createComponentIfNeeded(components, b);            
            aComponent.union(bComponent);
        }
        Set<DisjointSet> uniqueComponents = new HashSet<>();
        for (int i = 0; i < n; i++) {
            DisjointSet component = components[i];            
            if (component != null) {
                uniqueComponents.add(component.findRoot());
            }
        }        
        long validTriplets = choose3from(n);        
        for (DisjointSet component : uniqueComponents) {
            validTriplets -= choose3from(component.size);
            validTriplets -= choose2from(component.size) * (n - component.size);
        }
        System.out.println(validTriplets % mod);
    }
    static DisjointSet createComponentIfNeeded(DisjointSet[] components, int index) {
        if (components[index] == null) {
            components[index] = new DisjointSet();
        }
        
        return components[index];
    }
    static long choose3from(int n) {
        if (n < 3) return 0;
        long res = 1;
        for (int x = n - 2; x <= n; x++) {
            res *= x;
        }        
        return res / 6;
    }
    static long choose2from(int n) {
        if (n < 2) return 0;
        long res = 1;
        for (int x = n - 1; x <= n; x++) {
            res *= x;
        }        
        return res / 2;
    }
}