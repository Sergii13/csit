// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

let mm = gsap.matchMedia(),
  breakPoint = 768;

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".wrapper__scroll",
  smooth: 1.5,
  effects: true,
});
if (ScrollTrigger.isTouch !== 1) {
  // let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  // if (!isSafari) {
  //
  // }
}
