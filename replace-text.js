// Get the current page's HTML content
var html = document.body.innerHTML;

// The text in between / / will be replaced with ' '
//For example, all instances of /cat/ will be replaced with dog
//"My Cat is purring loudly" would turn into "My dog is purring loudly"
html = html.replace(/cat/g, 'dog');

// Set the new content for the page
document.body.innerHTML = html;
