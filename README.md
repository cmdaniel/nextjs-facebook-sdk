## Sample of Facebook Comments Plugin with Nextjs

Use of the plug-in in Server Side Generated Pages.
It was created a custom hook to load the Facebook sdk script.

## Known issues
- There is a problem to render the Facebook plugin:
    - The comments load might require a page refresh. It will not work if using the Next Link navigation. Therefore, it was created an autoreload mechanism. Ideally, this need to be improved.

## Different page types
```
Home: http://localhost:3000/
The home page uses Server Side Static generation.
```

```
Tags into React Fragment: http://localhost:3000/html
All tags are inserted as react fragments without data hydratation from server.
```

```
Pure Html: http://localhost:3000/test.html
Pure html file with all elements on it.
```