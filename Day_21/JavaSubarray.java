import java.io.*;
import java.util.*;

public class JavaSubarray {
   static int [] arr;
    public static int sas(int i,int j){
        int count=0;
        for(int k=i;k<=j;k++){
            count+=arr[k];
        }
        return count;
    }
    public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    int n=sc.nextInt(),count=0;
    arr=new int[n];
    for(int i=0;i<n;i++){
        arr[i]=sc.nextInt();
    }
    for(int i=0;i<n;i++){
        for(int j=i;j<n;j++){
            if(sas(i,j)<0){
                count++;
            }
        }
    }
    System.out.println(count);
    }
}

