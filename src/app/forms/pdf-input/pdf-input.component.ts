import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-input.component.html',
  styleUrl: './pdf-input.component.scss'
})
export class PdfInputComponent {

  pdf: File = new File([], '');

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onFileDrop(event: DragEvent) {
    if(event.dataTransfer) {
      event.preventDefault();
      event.stopPropagation();
      this.pdf = event.dataTransfer.files[0];
    }
  }

  onFileSelected(event: Event) {
    this.pdf = (event.target as HTMLInputElement).files![0];
  }

  get isThereAPdf() {
    return this.pdf.size > 0;
  }

  get pdfName() {
    return this.pdf.name;
  }
}
