"use strict";
var import_deltax = require("./deltax/deltax");
var deltax = new import_deltax.DeltaxJS();
deltax.code = `@print "Hello world"
@print("Hello world, again")`;
deltax.run();
//# sourceMappingURL=index.js.map
