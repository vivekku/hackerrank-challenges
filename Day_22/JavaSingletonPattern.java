class Singleton{
    public String str;
    static Singleton s = null;
    private Singleton(){
        
    }
    public static Singleton getSingleInstance(){
        if(s==null){
            s = new Singleton();
        }
        return s;
    }
}