# rocket (yeah!)

So I have a little secret that I've been keeping to myself. The
documented nextbus xml feed has a sexrect undocument JSON sibling!
Because I was using Backbone.js at the time to build findttc.com I was
looking for a way to access the nextbus data using JSON. So one day I
just took the xml feed

    http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=ttc

and replaced XML with JSON

    http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=ttc

and guess what.  It returned the same data but in json format!

Anyways, rocket is a wrapper to that data that makes it really easy to
acceess it.  Hope you dig it.

# rocket cli

One of the things missing from the nextbus data is an end point with all the stops and there longitude + latitude.  
This would obviously be a great thing to have if you wanted to say, show a user a list of stops that are close to them.

This functionality is included in rocket.  Simply type:

    rocket run

and a file will be saved to `./out/all.json` that contains all the routes + stops for the ttc with there lon + lat.
