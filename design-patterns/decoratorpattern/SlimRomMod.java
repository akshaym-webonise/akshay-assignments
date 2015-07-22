package decoratorpattern;

public class SlimRomMod extends ModDecorator 
{

	public SlimRomMod(AndroidMod aMod) 
	{
		super(aMod);
	}
	
	public void develop()
	{
		aMod.develop();
		System.out.println("Added SlimRomMod UI and settings");
	}
}
