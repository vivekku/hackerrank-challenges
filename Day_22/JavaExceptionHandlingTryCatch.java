public class JavaExceptionHandlingTryCatch {
    private final static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
        try {
            int a = scan.nextInt();
            int b = scan.nextInt();            
            System.out.println(a / b);
        } catch(InputMismatchException ime) {
            System.out.println(ime.getClass().getName());
        } catch(ArithmeticException ae) {
            System.out.println(ae.getClass().getName() + ": " + ae.getMessage());
        } catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }
}