import { Component, OnInit } from '@angular/core';
import { Pharmacien } from '../pharmacien';
import { PharmacienloginService } from '../pharmacienlogin.service';
import {
  
  ElementRef,
  ViewChild,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TweenMax} from 'gsap/all';
import { Router, RouterLink } from '@angular/router';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']

})
export class UserLoginComponent implements OnInit {

  @ViewChild('menu', { static: true }) menu: ElementRef<HTMLDivElement>;
  imageFirst: any;
  imageSecond: any;
  menuSecond: any;

  pharmacien:Pharmacien=new Pharmacien();

  constructor(private PharloginService:PharmacienloginService,private router: Router,@Inject(DOCUMENT) private document :Document) { }


  ngOnInit(): void {
    this.initialAnimations();
  }

  userLogin(){
  this.PharloginService.loginuser(this.pharmacien).subscribe(data=>{
    this.router.navigate(['/dashboard']),alert("login success")}, error=>alert("sorry failed")   )
}


   userRegister(){
  this.PharloginService.registeruser(this.pharmacien).subscribe(data=>{
     alert("register success") }, error=>alert("sorry failed")   )
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



} 

}
