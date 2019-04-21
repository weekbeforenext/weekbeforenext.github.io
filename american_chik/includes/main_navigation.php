<div id="mainNavigation">
<ul>
<?php
if($section == 'nesting'){
	echo '<li id="nesting">Nesting</li>';
}
else{
	echo '<li id="nesting"><a href="'.$root.'nesting/index.php">Nesting</a></li>';
}
if($section == 'resting'){
	echo '<li id="resting">Resting</li>';
}
else{
	echo '<li id="resting"><a href="'.$root.'resting/index.php">Resting</a></li>';
}
if($section == 'nourishing'){
	echo '<li id="nourishing">Nourishing</li>';
}
else{
	echo '<li id="nourishing"><a href="'.$root.'nourishing/index.php">Nourishing</a></li>';
}
echo '<div class="clear">&nbsp;</div>';
if($section == 'growing'){
	echo '<li id="growing">Growing</li>';
}
else{
	echo '<li id="growing"><a href="'.$root.'growing/index.php">Growing</a></li>';
}
if($section == 'healing'){
	echo '<li id="healing">Healing</li>';
}
else{
	echo '<li id="healing"><a href="'.$root.'healing/index.php">Healing</a></li>';
}
if($section == 'clothing'){
	echo '<li id="clothing">Clothing</li>';
}
else{
	echo '<li id="clothing"><a href="'.$root.'clothing/index.php">Clothing</a></li>';
}
?>
</ul>
</div>