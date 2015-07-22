package decoratorpattern;

public class TeslaMod extends ModDecorator {

	public TeslaMod(AndroidMod aMod) 
	{
		super(aMod);
	}

	public void develop()
	{
		aMod.develop();
		System.out.println("Added Tesla UI and applications");
	}
}
