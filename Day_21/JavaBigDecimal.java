class JavaBigDecimal{
    public static void main(String []args){
        Scanner sc= new Scanner(System.in);
        int n=sc.nextInt();
        String []s=new String[n+2];
        for(int i=0;i<n;i++){
            s[i]=sc.next();
        }
        sc.close();
		Arrays.sort(s, 0, n, (String s1, String s2) -> {
            BigDecimal n1 = new BigDecimal(s1);
            BigDecimal n2 = new BigDecimal(s2);
            return n2.compareTo(n1);
        });
        for(int i=0;i<n;i++) {
            System.out.println(s[i]);
        }
    }
}