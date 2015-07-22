package commandpattern;

public class Light
{
	  private boolean on;
	  public void switchOn()
	  {
	    on = true;
	    System.out.println("Light turned ON");
	  }
	  public void switchOff()
	  {
	    on = false;
	    System.out.println("Light turned OFF");
	  }
}