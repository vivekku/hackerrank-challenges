public static int height(Node root) {
      	if(root == null){
              return -1;
        }
        int left = height(root.left);
        int right = height(root.right);

        if(left >= right){
            return left + 1;
        } else {
            return right + 1;
        }
    }