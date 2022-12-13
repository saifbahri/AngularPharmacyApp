import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TweenMax} from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  @ViewChild('menu', { static: true }) menu: ElementRef<HTMLDivElement>;
  imageFirst: any;
  imageSecond: any;
  menuSecond: any;


constructor(@Inject(DOCUMENT) private document :Document){}



  title = 'pharmacie';
  ngOnInit() {
    this.initialAnimations();

  }

  initialAnimations(): void {
    TweenMax.from(".logo", 1, {
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    });
 
    TweenMax.staggerFrom("nav ul li", 1, {
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
  });

  TweenMax.from(".search", 1, {
    opacity: 0,
    delay: .5,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".menu", 1, {
  opacity: 0,
  delay: .6,
  x: -20,
  ease: Expo.easeInOut
})


TweenMax.from(".title", 1, {
  opacity: 0,
  delay: 1,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".btn", 1, {
  opacity: 0,
  delay: 1.6,

  ease: Expo.easeInOut
})

TweenMax.from(".line-one", 1, {
  opacity: 0,
  delay: 2,
  y: -800,
  ease: Expo.easeInOut
})
TweenMax.from(".line-two", 1, {
  opacity: 0,
  delay: 2.5,
  y: -800,
  ease: Expo.easeInOut
})

TweenMax.from(".img", 2, {
  opacity: 0,
  delay: 2.9,
  y: -800,
  ease: Expo.easeInOut
})

TweenMax.from(".year", 1, {
  opacity: 0,
  delay: 1.4,
  y: -20,
  ease: Expo.easeInOut
})


gsap.from(".media ul li", 4,{

  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
})

  } 
}