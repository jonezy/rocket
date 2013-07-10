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
