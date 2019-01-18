public class Solution {
	public static void main(String[] args) {
		Class student;
		try{
			student = Class.forName("Student");
		} catch(ClassNotFoundException cnfe){
			return;
		}
		Method[] methods = student.getDeclaredMethods();
		ArrayList<String> methodList = new ArrayList<>();
		for(Method method : methods){
			methodList.add(method.getName());
		}
		Collections.sort(methodList);
		for(String name: methodList){
			System.out.println(name);
		}
	}
}