public class JavaStaticInitializerBlock {
    private static final Scanner scan = new Scanner(System.in);
    private static int B, H;
    private static boolean flag = true;
    static {        
        B = scan.nextInt();
        H = scan.nextInt();
        if(B <= 0 || H <= 0) {
            flag = false;
            System.out.print("java.lang.Exception: Breadth and height must be positive");
        }
    }    
	public static void main(String[] args){
		if(flag){
			int area=B*H;
			System.out.print(area);
		}		
	}
}