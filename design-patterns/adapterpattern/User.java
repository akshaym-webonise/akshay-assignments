package adapterpattern;

public class User 
{
	ModemAdapter modem = new ModemAdapter();
	
	void receiveMail()
	{
		modem.receiveFromServer();
		System.out.println("Mail retrieved from mail server");
	}
	
	void sendMail()
	{
		modem.sendToServer();
		System.out.println("Mail sent");
	}
	
	public static void main(String args[]) throws InterruptedException
	{
		User u = new User();
		u.receiveMail();
		Thread.sleep(2000);
		u.sendMail();
	}
}
