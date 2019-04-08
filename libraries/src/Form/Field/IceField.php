<?php
// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die('Restricted access');

jimport('joomla.form.formfield');

class JFormFieldIce extends JFormField {
	
	public function getInput() {

		$JsonFile = file_get_contents("/[path-to-joomla]/templates/newtemplate/ice-flavours.json");

		$array = json_decode($JsonFile, true);

		return '<select id="'.$this->id.'" name="'.$this->name.'">'.
		       '<option value="1" >'.$array['option1'].'</option>'.
		       '<option value="2" >'.$array['option2'].'</option>'.
		       '<option value="3" >'.$array['option3'].'</option>'.
		       '<option value="4" >'.$array['option4'].'</option>'.
		       '<option value="5" >'.$array['option5'].'</option>'.
		       '<option value="6" >'.$array['option6'].'</option>'.
		       '<option value="7" >'.$array['option7'].'</option>'.
		       '<option value="8" >'.$array['option8'].'</option>'.
		       '<option value="9" >'.$array['option9'].'</option>'.
		       '</select>';
	}
}
?>
