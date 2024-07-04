import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-input.component.html',
  styleUrl: './image-input.component.scss'
})
export class ImageInputComponent {

  @ViewChild('imageFileInput') imageFileInput!: ElementRef;

  @Input() text: string = 'Upload Image';

  image: File = new File([], '');
  imagePreview: string | ArrayBuffer | null = null;

  width: number = 0;
  height: number = 0;

  constructor() {
  }

  onDragOver(event : any) {
    event.preventDefault();
  }

  onDropCover(event : any) {
    event.preventDefault();
    this.image = event.dataTransfer.files[0];
    this.updateImagePreview();
  }

  triggerFileInputCover() {
    this.imageFileInput.nativeElement.click();
  }

  onFileSelected(event : any) {
    this.image = event.target.files[0];
    this.updateImagePreview();
  }

  updateImagePreview() {
    let reader = new FileReader();
    reader.readAsDataURL(this.image);
    reader.onload = () => {
      this.imagePreview = reader.result;
      this.updateImageSize();
    }
  }

  updateImageSize() {
    let img = new Image();
    img.src = URL.createObjectURL(this.image);
    img.onload = () => {
      this.width = img.width;
      this.height = img.height;
    }
  }

  setImage(image: string) {
    this.imagePreview = image;
  }

  removeImage() {
    this.image = new File([], '');
    this.imagePreview = null;
  }

  removeImageFile() {
    this.image = new File([], '');
  }

  getImageFile(): File | null {
    if (this.image.size === 0) {
      return null;
    }
    return this.image;
  }

  get isImageValid(): boolean {
    if (this.image.size === 0) {
      return false;
    }
    return true;
  }

}
