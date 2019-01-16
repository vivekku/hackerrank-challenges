public class JavaEndOfFile {
    private static final Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
        int i = 1;
        while(scan.hasNext()){
            String line = scan.nextLine();
            System.out.println(i + " " + line);
            i++;
        }
    }
}