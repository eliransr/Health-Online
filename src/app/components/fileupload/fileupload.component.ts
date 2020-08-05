import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from 'src/app/services/file-uploader.service';
import { Doctor } from './../../interfaces/doctor';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})

export class FileuploadComponent implements OnInit {

  fileObj: File;
  fileUrl: string;
  errorMsg: boolean;
  title = 's3-file-uploader-app';
  doctor:Doctor[];

  constructor(private fileUploadService: FileUploaderService) {
    this.errorMsg = false;
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  refresh(): void {
   this.doctor=null;
  }

  onFilePicked(event: Event): void {

    this.errorMsg = false;
    console.log(event);
    const FILE = (event.target as HTMLInputElement).files[0];
    this.fileObj = FILE;
    console.log(this.fileObj);
  }
  
  onFileUpload() {

    if (!this.fileObj) {
      this.errorMsg = true;
      return
    }
    
    const fileForm = new FormData();
    fileForm.append('file', this.fileObj);
    this.fileUploadService.fileUpload(fileForm).subscribe(res => {
      
      {res.similarity?
        res.similarity=parseFloat(res.similarity).toFixed(3)
        :
        null
      }
      this.doctor=res;
      console.log(res)

      
      this.doctor=res;
      // console.log(res);
      console.log(this.doctor);
     
      this.fileUrl = res['image'];
    });


    
  }
}
