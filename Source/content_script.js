walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	v = v.replace(/\bDonald Trump\b/g, "Literally Hitler");
	v = v.replace(/\bdonald trump\b/g, "literally hitler");
	v = v.replace(/\bDONALD TRUMP\b/g, "LITERALLY HITLER");
	v = v.replace(/\bTrump\b/g, "Literally Hitler");
	v = v.replace(/\btrump\b/g, "literally hitler");
	v = v.replace(/\bTRUMP\b/g, "LITERALLY HITLER");

	
	textNode.nodeValue = v;
}


