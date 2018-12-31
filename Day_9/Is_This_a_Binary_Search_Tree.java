boolean leftBST(Node root, int data) {
        if(root == null){
            return true;
        }
        if(root.data >= data){
            return false;
        }
        return leftBST(root.left, root.data) && leftBST(root.left, data) &&
               leftBST(root.right, data) && rightBST(root.right, root.data);
    }
    boolean rightBST(Node root, int data) {
        if(root == null){
            return true;
        }
        if(root.data <= data){
            return false;
        }
        return rightBST(root.right, root.data) && rightBST(root.right, data) &&
               rightBST(root.left, data) && leftBST(root.left, root.data);        
    }
    boolean checkBST(Node root) {
        return leftBST(root.left, root.data) && rightBST(root.right, root.data);
    }