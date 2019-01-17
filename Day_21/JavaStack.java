public class JavaStack {	
	public static void main(String []argh) {
		Scanner sc = new Scanner(System.in);		
		while (sc.hasNext()) {
			String input=sc.next();
            Stack<Character> brackets = new Stack<>();
            for(int i = 0;i<input.length();i++){
                if(!brackets.isEmpty()){
                    char bracket = brackets.peek();
                    if((bracket =='{' && input.charAt(i)=='}') || 
                    (bracket=='(' && input.charAt(i)==')')||
                    (bracket== '[' && input.charAt(i)==']'))
                        brackets.pop();
                    else{
                        brackets.push(input.charAt(i));
                    }
                } else {
                    brackets.push(input.charAt(i));
                }
            }
            System.out.println(brackets.isEmpty());
		}		
	}
}

