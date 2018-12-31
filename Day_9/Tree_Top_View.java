	public static void topView(Node root) {
      class QueueObj {
          Node node;
          int hd;
          QueueObj(Node node, int hd) {
              this.node = node;
              this.hd = hd;
          }
      }
      Queue<QueueObj> q = new LinkedList<QueueObj>();
      Map<Integer, Node> topViewMap = new TreeMap<Integer, Node>();
      if(root == null){
          return;
      } else {
          q.add(new QueueObj(root, 0));
      }
      while(!q.isEmpty()){
          QueueObj tempNode = q.poll();
          if(!topViewMap.containsKey(tempNode.hd)) {
              topViewMap.put(tempNode.hd, tempNode.node);
          }
          if(tempNode.node.left != null){
              q.add(new QueueObj(tempNode.node.left, tempNode.hd - 1));
          }
          if(tempNode.node.right != null){
              q.add(new QueueObj(tempNode.node.right, tempNode.hd + 1));
          }
      }
      for(Map.Entry<Integer, Node> entry : topViewMap.entrySet()){
          System.out.print(entry.getValue().data + " ");
      }
    }