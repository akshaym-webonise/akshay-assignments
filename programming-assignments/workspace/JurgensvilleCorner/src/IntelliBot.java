//This class parse the map tree for items and gives the restaurant offering cheapest meal

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class IntelliBot {

	/**
	 * @param args
	 */
	double minCost = 99, restCost=0;
	boolean valueMeal=false;
	int valueMealRes = -1;
	boolean included=false;
	
	public boolean isValueMeal() {
		return valueMeal;
	}

	public void setValueMeal(boolean valueMeal) {
		this.valueMeal = valueMeal;
	}

	public double getRestCost() {
		return restCost;
	}

	public void setRestCost(double restCost) {
		this.restCost = restCost;
	}

	public double getMinCost() {
		return minCost;
	}

	public void setMinCost(double minCost) {
		this.minCost = minCost;
	}

	public int getCheapestRestaurant(Map<Integer, Map<String, Double>> restaurants, List<String> items)
	{
		boolean hasMenu;
		Map<String, Double> menuItems = new HashMap<String, Double>();
		int restID = -1;
		for(Integer key:restaurants.keySet())
		{
			menuItems.clear();
			menuItems = restaurants.get(key);
			//System.out.println(menuItems);
			hasMenu = isHavingTheMenu(menuItems, items);
			
			if(hasMenu)
			{
				System.out.println("Restaurant "+key+" has menu");
				System.out.println("Cost = "+this.getRestCost());
				if(this.getRestCost()<this.getMinCost())
				{
					this.setMinCost(this.getRestCost());
					restID = key;
				}
				else if(this.getRestCost() == this.getMinCost())
				{
					int value = getValueMealRestaurant(restaurants, key, restID);
					if(value!=-1)
					restID = value;
				}
				//minCost = getBill(menuItems, items);
			}
		}
		return restID;
	}
	
	private int getValueMealRestaurant(Map<Integer, Map<String, Double>> restaurants, Integer key, int restID) 
	{
		Map<String, Double> menuItems = restaurants.get(key);
		for(String item : menuItems.keySet())
		{
			if(item.contains(" "))
				return key;
		}
		menuItems = restaurants.get(restID);
		for(String item : menuItems.keySet())
		{
			if(item.contains(" "))
				return restID;
		}
		return -1;
	}

	public boolean isHavingTheMenu(Map<String, Double> menuItems, List<String> items)
	{
		boolean havingMenu=true, found;
		double cost=0;
		for(String item : items)
		{
			found = containsItem(menuItems, item);
			//System.out.println(item+" "+found);
			if(found)
			{
				//for(String i:menuItems.keySet())
				//	System.out.println(i);
				//System.out.println(item+" = "+menuItems.get(item));
				cost += getItemCost(menuItems, item);
				//System.out.println("Value "+cost);
			}
			//System.out.println(havingMenu+" "+found);
			if(havingMenu==false || found==false)
			havingMenu = false;
		}
		if(havingMenu == true )//&& cost<minCost)
			this.setRestCost(cost);
		//System.out.println(items+" are having "+havingMenu);
		return havingMenu;
	}
	
	
	private double getItemCost(Map<String, Double> menuItems, String item) 
	{
		if(valueMeal)
		{
			if(!included)
			{
				for(String menu : menuItems.keySet())
				{				
					if(menu.contains(item))
					{
						included = true;
						return menuItems.get(menu);
					}			
				}
			}			
		}
		else
			return menuItems.get(item);
		return 0;
	}

	public boolean containsItem(Map<String, Double> menuItems, String item)
	{
		for(String menu : menuItems.keySet())
		{
			//System.out.println(menu+" "+item);
			if(menu.equals(item))			
			{				
				return true;				
			}
			if(menu.contains(item))
			{
				this.setValueMeal(true);
				return true;
			}
		}
		return false;
	}
}
