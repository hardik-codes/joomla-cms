<?php 

defined('_JEXEC') or die;

?>

<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >


<head>
	<jdoc:include type="metas" />
	<jdoc:include type="styles" />
	<jdoc:include type="scripts" />

<!-- Bootstrap CSS-->
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/media/vendor/bootstrap/css/bootstrap.css" type="text/css" />

<!-- Template CSS -->
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/newtemplate/css/template.css" type="text/css" />

<!-- Bootstrap JS-->
<script src="<?php echo $this->baseurl ?>/media/vendor/bootstrap/js/bootstrap.js"></script>

</head>
<body>
	<div>
        <h3>
          <jdoc:include type="modules" name="top" style="none" />
        </h3>
    </div>

	<div class="row">
		<div class="col-md-2" style="padding-left: 50px;">
			<jdoc:include type="modules" name="left" style="none"/>
		</div>

		<div class="col-md-7">
			<jdoc:include type="component" style="none"/>
		</div>

		<div class="col-md-3" style="padding-right: 50px;">
			<jdoc:include type="modules" name="right" style="none"/>
		</div>
	
</body>
</html>