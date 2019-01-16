public class JavaAnagrams {
    static boolean isAnagram(String a, String b) {
        if(a.length() != b.length()){
			return false;
		} else if (a.toUpperCase().equals(b.toUpperCase())) {
			return true;
		} else {
            int alpha[] = new int[26];
            for (int i = 0; i < a.length(); i++) {
                alpha[a.toUpperCase().charAt(i) - 65]++;
                alpha[b.toUpperCase().charAt(i) - 65]--;
            }
            int res = 0;
            for (int i = 0; i < 26; i++) {
				if (alpha[i] != 0) {
					res++;
				} 
			}             
            if (res == 0) {
				return true;
			} else {
				return false;
			}       
        }
    }
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String a = scan.next();
		String b = scan.next();
		scan.close();
		boolean ret = isAnagram(a, b);
		System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
	}
}