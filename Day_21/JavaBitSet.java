public class JavaBitSet {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int testcases = sc.nextInt();
        BitSet b1 = new BitSet(size);
        BitSet b2 = new BitSet(size);
        BitSet[] bitSets = new BitSet[] { b1, b2};
        for (int i=0; i<testcases; i++) {
            String op = sc.next();
            int i1 = sc.nextInt();
            int i2 = sc.nextInt();
            switch(op) {
                case "AND":
                    bitSets[i1 - 1].and(bitSets[i2 - 1]);
                    break;
                case "OR":
                    bitSets[i1 - 1].or(bitSets[i2 - 1]);
                    break;
                case "XOR":
                    bitSets[i1 - 1].xor(bitSets[i2 - 1]);
                    break;
                case "FLIP":
                    bitSets[i1 - 1].flip(i2);
                    break;
                case "SET":
                    bitSets[i1 - 1].set(i2);
                    break;
            }
            System.out.println(b1.cardinality() + " " + b2.cardinality());
        }
    }
}