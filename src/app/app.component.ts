import { Component } from '@angular/core';
import { NotesService } from './services/notes.service';
import { MatSnackBar } from '@angular/material';

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
  constructor(private notesService: NotesService, private snackBar: MatSnackBar) {
    this.notesService.getNotes().valueChanges()
    .subscribe( (fbNotas) => {
      this.notas = fbNotas;
      console.log(this.notas);
    } )
  }

  guardarNota() {
    this.nota.id = Date.now();
    console.log("Nota guardada:", this.nota);
    this.notesService.createNote(this.nota).then(() => {
      this.nota = {};
      this.snackBar.open('Nota Creada', null, {
        duration: 2000, 
      });
    })
  }

}
