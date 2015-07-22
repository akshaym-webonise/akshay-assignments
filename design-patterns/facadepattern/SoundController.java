package facadepattern;

public class SoundController 
{
	public void raiseVolume()
	{
		System.out.println("Volume up by 5");
	}
	
	public void decreaseVolume()
	{
		System.out.println("Volume down by 5");
	}
	
	public void mute()
	{
		System.out.println("Volume muted");
	}
	
	public void changeAudioSettings()
	{
		System.out.println("Volume settings changed");
	}
}
