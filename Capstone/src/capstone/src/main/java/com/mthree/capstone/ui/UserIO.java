package capstone.src.main.java.com.mthree.capstone.ui;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;

public class UserIO implements View{

	public int getInt(int min, int max)
	{
		boolean invalid;
		int value = 1;
		
		do
		{
			invalid = false;
			String input = in.nextLine();
			
			try
			{
				Integer.parseInt(input);
			}
			catch(NumberFormatException e)
			{
				//print not an integer
				invalid = true;
			}
			
			if(!invalid)
			{
				value = Integer.parseInt(input);
				if(value < min || value > max)
				{
					//print out of range
					invalid = true;
				}
			}
			
		}while(invalid);
		
		return value;
	}
	
	public String getString()
	{
		return in.nextLine();
	}
	
	public LocalDate getLD()
	{
		boolean validM;
		boolean validD;
		boolean validY;
		boolean validLD;
		
		String month = "",day = "",year = "";
		
		LocalDate date = LocalDate.now();
		
		do
		{
			validLD = true;
			
			//print "give month"
			do
			{
				validM = true;
				month = in.nextLine(); 
				
				try
				{
					Integer.parseInt(month);
				}
				catch(NumberFormatException e)
				{
					//print not month
					validM = false;
					month = "10";
				}
				
				int mCheck = Integer.parseInt(month);
				if(mCheck <= 0 || mCheck > 12)
				{
					//print not month
					validM = false;
				}
			}while(!validM);
			if(Integer.parseInt(month)<10) {month = "0"+month;}
			
			//print give day
			do
			{
				validD = true;
				day = in.nextLine(); 
				
				try
				{
					Integer.parseInt(day);
				}
				catch(NumberFormatException e)
				{
					//print not day
					validD = false;
					day = "10";
				}
				
				int dCheck = Integer.parseInt(day);
				if(dCheck <= 0 || dCheck > 31)
				{
					//print not day
					validD = false;
				}
			}while(!validD);
			if(Integer.parseInt(day)<10) {day = "0"+day;}
			
			//print give year
			do
			{
				validY = true;
				year = in.nextLine(); 
				
				try
				{
					Integer.parseInt(year);
				}
				catch(NumberFormatException e)
				{
					//print not year
					validY = false;
					year = "1000";
				}
				
				int yCheck = Integer.parseInt(year);
				if(yCheck <= 0)
				{
					//print not year
					validY = false;
				}
			}while(!validY);
			if(Integer.parseInt(year)<1000 && Integer.parseInt(year)>= 999) {year = "0"+year;}
			else if(Integer.parseInt(year)<100 && Integer.parseInt(year)>= 99) {year = "00"+year;}
			else if(Integer.parseInt(year)<10) {year = "000"+year;}
			
			try
			{
				LocalDate.parse(year+"-"+month+"-"+day);
			}
			catch(DateTimeParseException e)
			{
				//print not date
				validLD = false;
			}
			
			if(validLD)
			{
				date = LocalDate.parse(year+"-"+month+"-"+day);
			}
			
		}while(!validLD);
		
		return date;
	}
	
}
