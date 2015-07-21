
public class TddArray 
{	
	int[] removeDuplicates(int array[])
	{
		int total = array.length, i, j, k, shift;
		for(i=0  ;i<array.length-1 ; i++)
		{
			
			for(j=i+1 ; j<total ; j++)
				if(array[i]!=array[j])
					break;

			if(j!=(i+1))
			{	
				shift=(j-i-1);
				k=i+1;
				for(k=i+1 ; j<total ; j++, k++)
					array[k]=array[j];
				total -= shift;
			}			
		}
		for(i=total ; i<array.length;i++)
			array[i]=0;
		return array;		
	}
	
	public static void main(String[] args) 
	{
		TddArray tdd = new TddArray();
		
		int myArray[] = {1, 1, 2, 3, 3, 3, 4, 3, 3};
		tdd.display(myArray);
		
		int newArray[] = tdd.removeDuplicates(myArray);
		tdd.display(newArray);
	}
	
	void display(int array[])
	{
		for(int i=0 ; i<array.length ; i++)
			System.out.print(array[i]+" ");
		System.out.println();
	}
}
