package adapterpattern;

public class ModemAdapter 
{
	PersonalComputer pc = new PersonalComputer();
	TelephoneController tc = new TelephoneController();
	
	public void receiveFromServer()
	{
		tc.receiveAnalogSignal();
		//Convert analog signal to digital signal
		pc.receiveDigitalSignal();
	}
	
	public void sendToServer()
	{
		pc.receiveDigitalSignal();
		//Convert analog signal to digital signal
		tc.sendAnalogSignal();
	}
}
