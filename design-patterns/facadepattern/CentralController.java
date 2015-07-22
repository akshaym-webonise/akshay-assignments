package facadepattern;

public class CentralController 
{
	public static void main(String args[])
	{
		TvController tv = new TvController();
		SoundController sc = new SoundController();
		AcController ac = new AcController();
		RoomController rc = new RoomController();
		
		//To watch movie
		rc.setDimLights();
		ac.setAutoMode();
		tv.turnOn();
		tv.changeVideoSettings();
		sc.raiseVolume();
		
		//After watching movie
		tv.turnOff();
		ac.turnOff();
		rc.switchOffLights();
	}	
}
