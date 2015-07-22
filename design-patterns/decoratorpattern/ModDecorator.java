package decoratorpattern;

public class ModDecorator implements AndroidMod {

	protected AndroidMod aMod;
	
	public ModDecorator(AndroidMod aMod)
	{
		this.aMod = aMod;
	}
	public void develop() 
	{
		this.aMod.develop();
	}
}
