import java.io.*;
import java.util.*;
public class Solution {
public class treap_i
    {
    public class node
        {
            int size;long data;int priority;
            node left;node right;
        }
    public int size(node root)
        {
            if(root==null)return 0;
            else return root.size;
        }
    public void update_size(node root)
        {
          root.size=size(root.left)+size(root.right)+1;  
        }
    public node head=null;
    public void split(node l,node r,node root,int add,int index)
        {
            if(root==null){}
            else
                {
                    int position=add+size(root.left)+1;
                    if(index>=position)
                        {
                            l.data=root.data;l.size=root.size;l.priority=root.priority;l.left=root.left;
                            node temp=new node();l.right=temp;
                            split(l.right,r,root.right,position,index);
                        }
                    else
                        {
                            r.data=root.data;r.size=root.size;r.priority=root.priority;r.right=root.right;
                            node temp=new node();r.left=temp;
                            split(l,r.left,root.left,add,index);
                        }
                    if(l.data!=0)
                    update_size(l);
                    if(r.data!=0)
                    update_size(r);
                }
        }
    public void merge(node l,node r,node root)
        {
      if(l==null && r!=null){root.data=r.data;root.size=r.size;root.priority=r.priority;root.left=r.left;root.right=r.right;}
      else if(l!=null && r==null){root.data=l.data;root.size=l.size;root.priority=l.priority;root.left=l.left;root.right=l.right;}
      else if(l!=null && r!=null)
           {
            if(l.priority>r.priority)
                {
                    root.data=l.data;root.priority=l.priority;root.size=l.size;root.left=l.left;
                    node temp=new node();root.right=temp;
                    merge(l.right,r,root.right);
                }
            else
               {
                   root.data=r.data;root.priority=r.priority;root.size=r.size;root.right=r.right;
                   node temp=new node();root.left=temp;
                   merge(l,r.left,root.left);   
               }
           update_size(root);
           }
        }
    public void add_i(int index,long data)
        {
            node temp=new node();
            temp.data=data;temp.size=1;temp.priority=(int)(Math.random()*(double)10000000)+1;
            if(head==null)head=temp;
            else
                {
                    node root=new node();
                    merge(head,temp,root);
                    head=root;
                }
        }
    public void query(int i,int j,int type,int N)
        {
            if(i==1 && j==N){}
            else if(i==1)
                {
                    node l=new node();node r=new node();split_safe(j,l,r,head);
                    if(type==2)
                        {
                            node root=new node();
                            merge(r,l,root);head=root;
                        }
                }
            else
                {
                    node l_1=new node();node r_1=new node();split_safe(i-1,l_1,r_1,head);
                    node l_2=new node();node r_2=new node();split_safe(j-i+1,l_2,r_2,r_1);
                    if(type==1)
                        {
                        node root_1=new node();merge(l_2,l_1,root_1);
                        node root_2=new node();merge(root_1,r_2,root_2);
                        head=root_2;
                        }
                    else
                        {
                        node root_1=new node();merge(l_1,r_2,root_1);
                        node root_2=new node();merge(root_1,l_2,root_2);
                        head=root_2;    
                        }
                }
        }
    public void split_safe(int index,node l,node r,node root)
    {
    	split(l,r,root,0,index);
    	node traverse=l.right;node second=l;
    	try{while(traverse.right!=null){second=second.right;traverse=traverse.right;}
    	second.right=null;}catch(Exception e){}
    	traverse=r.left;second=r;
    	try{while(traverse.left!=null){second=second.left;traverse=traverse.left;}
    	second.left=null;}catch(Exception e){r=null;}
    }
    public int I=0;
    public void inorder(int n)
        {
            long A[]=new long[n];
            order(head,A);
            System.out.println(Math.abs(A[n-1]-A[0]));
            for(int i=0;i<n;i++)System.out.print(A[i]+" ");
        }
    public void order(node root,long A[])
        {
            if(root!=null)
            {
                order(root.left,A);
                A[I]=root.data;I++;
                order(root.right,A);
            }
        }
    }
    public static void main(String args[])
        {
            Scanner input=new Scanner(System.in);
            Solution.treap_i S=new Solution().new treap_i(); 
            int n=input.nextInt();
            int m=input.nextInt();
            for(int i=0;i<n;i++){S.add_i(i+1,input.nextLong());}
            while(m>0)
            {
            	m--;
            	int type=input.nextInt();
            	int i=input.nextInt();int j=input.nextInt();
            	S.query(i,j,type,n);
            }
            S.inorder(n);
        }
}