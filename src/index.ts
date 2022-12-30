import { DeltaxJS } from "./deltax/deltax";

var deltax = new DeltaxJS();

deltax.code = `@print "Hello world"
@print("Hello world, again")`;

deltax.run();