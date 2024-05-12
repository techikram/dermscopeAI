import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    
    console.log(event.target.files);
  }

  upload() {
    // Mostrar animación de redondas moviéndose
    
    // Retrasar la navegación al componente de resultados después de 2 segundos
    setTimeout(() => {
      this.router.navigate(['/results']);
    }, 10);
  }

}
