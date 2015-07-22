//This class loads the CSV file into a nexted map structure

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


public class FileLoader 
{	
	BufferedReader csvReader;
	String row;
	Map<Integer, Map<String, Double>> restaurants = new HashMap<Integer, Map<String, Double>>();
	Map<String, Double> menuItems = new HashMap<String, Double>();
	
	public Map<Integer, Map<String, Double>> loadMenuFile(String file)
	{
		try
		{
			File csvFile = new File(file);
			csvReader = new BufferedReader(new FileReader(csvFile));
			while((row = csvReader.readLine())!=null)
			{
				menuItems = new HashMap<String, Double>();
				String rowData[] = row.split(",", 3);

				if(restaurants.isEmpty())
				{
					//System.out.println("Empty adding new");
					menuItems.put(rowData[2].trim(), new Double(rowData[1]));
					restaurants.put(new Integer(rowData[0]), menuItems);
					//System.out.println(restaurants.size()+" "+menuItems.size());
				}
				else
				{
					//System.out.println("Res present");
					if(restaurants.containsKey(new Integer(rowData[0])))
					{
						//System.out.println(rowData[0]+" present");
						menuItems = restaurants.get(new Integer(rowData[0]));
					}
					menuItems.put(rowData[2].trim(), new Double(rowData[1]));
					restaurants.put(new Integer(rowData[0]), menuItems);
					//System.out.println(restaurants.size()+" "+menuItems.size());
				}
			}
		}
		catch(FileNotFoundException e)
		{
			System.out.println("File not present.");
			e.printStackTrace();
		}
		catch(IOException e)
		{
			System.out.println("Error reading file");
		}		
		return restaurants;
	}
	public static void main(String[] args) 
	{
		MainClass.main(new String[]{"data.csv", "burger", "tofu_log"});
	}

}
