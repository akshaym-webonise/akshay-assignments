package proxypattern;

public class RealServer implements Server {

	   private String fileName;

	   public RealServer(String fileName){
	      this.fileName = fileName;
	      loadFromDisk(fileName);
	   }

	   @Override
	   public void fetchData() {
	      System.out.println("Displaying " + fileName);
	   }

	   private void loadFromDisk(String fileName){
	      System.out.println("Loading " + fileName);
	   }
	}