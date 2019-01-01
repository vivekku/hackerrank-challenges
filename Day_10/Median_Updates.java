import java.util.*;

class Solution {
    /* Head ends here*/
    private  static int size=0;
    private static ArrayList<Integer> list = new ArrayList<Integer>();
    static void median(String a[], int x[]) {
        for (int i = 0; i < a.length; i++) {
            if (a[i].equals("r")) {
                int pos = Collections.binarySearch(list, x[i]);
                if (pos < 0) {
                    System.out.println("Wrong!");
                    continue;
                } else
                    list.remove(pos);
                size--;
              } else {
                int pos = Collections.binarySearch(list, x[i]);
                if (pos < 0)
                    pos = -pos - 1;
                list.add(pos, x[i]);
                size++;
                
            }
            if(size>0){
            if(size%2==1){
                System.out.println(list.get(size/2));
            }else{
                long median=(long)list.get(size/2)+(long)list.get((size/2)-1);
                if(median%2==0)
                {
                    System.out.format("%d%n",median/2);
                }
                else{
                    System.out.format("%.1f%n", median / 2.0);
                }
            }
        }
        else{
            System.out.println("Wrong!");
        }

        }
    }
    

    /* Tail starts here*/
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int N;
        N = in.nextInt();
        String s[] = new String[N];
        int x[] = new int[N];
        for (int i = 0; i < N; i++) {
            s[i] = in.next();
            x[i] = in.nextInt();
        }
        median(s, x);
    }
}
