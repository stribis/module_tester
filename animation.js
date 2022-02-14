import { gsap } from "./node_modules/gsap";
import { MotionPathPlugin } from "./node_modules/gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


gsap.to('div',{x: 300})