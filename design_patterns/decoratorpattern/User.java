package decoratorpattern;

public class User 
{
	public static void main(String args[])
	{
		TeslaMod tMod = new TeslaMod(new CyanogenMod());
		tMod.develop();
		
		SlimRomMod sMod = new SlimRomMod(new CyanogenMod());
		sMod.develop();
	}
}
