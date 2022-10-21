import { Injectable } from '@angular/core';
import {
  AngularFireAuth} from '@angular/fire/compat/auth';
import { User } from '../shared/user.class';
//
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }
  //login
  async onLogin(user: User) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('error en login', error);
    }
    // registro


  }

  async onRegister(user: User) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        ;
    } catch (error) {
      console.log('error en el registro de usuario(service)', error);
    }
  }
}
