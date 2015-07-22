package iteratorpattern;

public class NameRepository implements Container 
{
	public String names[] = {"Kasper" , "Sky" ,"Jarvis" , "Shiro"};

	public Iterator getIterator() 
	{
		return new NameIterator();
	}

	private class NameIterator implements Iterator 
	{
		int index;

	    public boolean hasNext()
	    {	      
	    	if(index < names.length)
	    	{
	    		return true;
	        }
	        return false;
	    }

	    @Override
	    public Object next() 
	    {	      
	    	if(this.hasNext())
	    	{
	    		return names[index++];
	        }
	        return null;
	    }		
	}
}