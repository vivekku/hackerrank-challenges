public class JavaPrimalityTest {
    private static final Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        String n = scanner.nextLine();
		BigInteger b = new BigInteger(n);
        System.out.println((b.isProbablePrime(1)?"prime":"not prime"));
        scanner.close();
    }
}
