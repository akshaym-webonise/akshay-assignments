package proxypattern;

public class ProxyServer implements Server{

	   private RealServer realServer;
	   private String fileName;

	   public ProxyServer(String fileName){
	      this.fileName = fileName;
	   }

	   @Override
	   public void fetchData() {
	      if(realServer == null){
	    	  realServer = new RealServer(fileName);
	      }
	      realServer.fetchData();
	   }
	}