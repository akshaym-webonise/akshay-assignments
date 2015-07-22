package proxypattern;



public class ProxyPatternDemo {
	
   public static void main(String[] args) {
      Server server = new ProxyServer("Homepage.html");

      //file will be loaded from disk
      server.fetchData(); 
      System.out.println("");
      
      //file will not be loaded from disk
      server.fetchData(); 	
   }
}