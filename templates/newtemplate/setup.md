### Setup Instructions
1. Clone the branch 'template' into your local system  
   using ``` git clone -b template git@github.com:hardik-codes/joomla-cms.git```
	 
2. Setup the joomla cms in your local system using https://docs.joomla.org/J4.x:Setting_Up_Your_Local_Environment

3. In the ```libraries/src/Form/Field/IceField.php```   
   replace the ```[path-to-joomla]``` with the path of your joomla repo in the following line ```$JsonFile = file_get_contents("/[path-to-joomla]   
	 /templates/newtemplate/ice-flavours.json");```
	 
4. You are all set now !!
