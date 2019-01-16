public class JavaIfElse {
    private static final Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        int N = scanner.nextInt();
        if(N % 2 != 0){
            System.out.println("Weird");
        } else{
            if(N > 5 && N < 21){
                System.out.println("Weird");
            } else if (N > 1 && N < 6 || N > 20) {
                System.out.println("Not Weird");
            }
        }
        scanner.close();
    }
}