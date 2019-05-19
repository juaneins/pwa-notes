import { Component } from '@angular/core';
import { NotesService } from './services/notes.service';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './services/auth.service';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-test';
  panelOpenState = false;
  categorias: any  = ['Trabajo', 'Personal'];
  nota:any = {};
  notas : any = [];
  message: any = {};
  constructor(private notesService: NotesService, private snackBar: MatSnackBar, private authService : AuthService,
    public messagingService: MessagingService) {
    this.notesService.getNotes().valueChanges()
    .subscribe( (fbNotas) => {
      this.notas = fbNotas;
      console.log(this.notas);
    } );
    this.messagingService.getPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  guardarNota() {
    if (!this.nota.id) {
      this.nota.id = Date.now();
    }   
    console.log("Nota guardada:", this.nota);
    this.notesService.createNote(this.nota).then(() => {
      this.nota = {};
      this.snackBar.open('Nota Creada', null, {
        duration: 2000, 
      });
    })
  }

  seleccionarNota(nota) {
    console.log(nota);
    this.nota = nota;
  }

  eliminarNota(nota) {
    this.notesService.deleteNote(nota).then( () => {
      this.nota = {};
      this.snackBar.open('Nota eliminada', null, {duration: 8000});
    } ) ;
  }

  login() {
    this.authService.loginWithFacebook();
  }
}
