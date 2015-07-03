//This is the controller class for JurgensVille corner app

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class MainClass 
{
	public void display(Map<Integer, Map<String, Double>> restaurants)
	{
		Map<String, Double> menuItems = new HashMap<String, Double>();
		System.out.println(restaurants);
		for(Integer key:restaurants.keySet())
		{			
			menuItems = restaurants.get(key);
			System.out.print(" Restaurant ID : "+key+"\n");
			
			for(String item:menuItems.keySet())
			{
				System.out.println(item+" "+menuItems.get(item));
			}
			menuItems.clear();
			System.out.println();
		}		
	}
	
	public static void main(String[] args) 
	{
		int tokens = args.length;
		String menuFile="";
		List<String> items = new ArrayList<String>();
		Map<Integer, Map<String, Double>> restaurants;
		IntelliBot bot = new IntelliBot();
		
		/*for(int arg = 0 ; arg<tokens ; arg++)
		{
			System.out.println("Arg "+arg+" : "+args[arg]);
		}*/
		
		menuFile = args[0];
		
		for(int item = 1 ; item<tokens ; item++)
		{
			if(!items.contains(args[item]))
			items.add(args[item]);
		}
		restaurants = new FileLoader().loadMenuFile(menuFile);
		
		//mainClass.display(restaurants);
		
		int restaurantId = bot.getCheapestRestaurant(restaurants, items);
		if(restaurantId!=-1)
		{
			System.out.println("\nRestaurant "+restaurantId+" would offer the meal for $"+bot.getMinCost());
			if(bot.isValueMeal())
				System.out.println("Your requested item(s) comes under the Value Meal");
		}
		else
		{
			System.out.println("No match found for items "+items);
		}
		System.out.println("Terminated");
	}
}
