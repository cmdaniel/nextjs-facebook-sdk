## Sample of Facebook Comments Plugin with Nextjs

Use of the plug-in in Server Side Generated Pages.

## Known issues
- There is a problem to render the Facebook plugin:
    - If the script is inserted into the html, it works, but when we navigate to another page that also have the plugin, it is not loaded at the page except if you refresh the page.

## Different page types
```
Home: http://localhost:3000/
The script is loaded at the useEffect hook, using javascript to render the Facebook script.
```
```
Html: http://localhost:3000/html
Both the script and html tags are inserted manually.
```