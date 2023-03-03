import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
 

  @Output() contentAdded = new EventEmitter<Content>();
  newContent: Content = {
    id: '', title: '', description: '', imgURL: '', type: '', tags: [], creator: '' }
  errorMessage: string = '';

  id!: string;
  title!: string;
  description!: string;
  imgURL!: string;
  type!: string;
  tags!: string[];
  creator!: string;
    contentArray: any;


  onSubmit() {
    const promise = new Promise<Content>((resolve, reject) => {
      // Add the new content to the array of existing content
      const existingContent = this.contentArray; // Assuming `contentList` is an array of existing content in the parent component
      const newContent = this.newContent;
      existingContent.push(newContent);

      // Resolve the promise with the new content item
      resolve(newContent);
    });
    promise.then(
      (content: Content) => {
        console.log(`Content '${content.title}' added successfully!`);
        this.contentAdded.emit(content);
        this.clearFields();
      },
      (error: string) => {
        console.error(`Error adding content: ${error}`);  
        this.errorMessage = error;
      }
    );
  }

  clearFields() {
    this.newContent = { id: '', title: '', description: '', imgURL: '', type: '', tags: [], creator: ''};
    this.errorMessage = '';
  }


/*  function createContentItem(title, description) {
  return new Promise((resolve, reject) => {
    // create a new content item using the title and description
    const newContentItem = { title, description };
    // resolve the promise with the new content item
    resolve(newContentItem);
  });
}

function handleSuccess(title) {
  console.log(`New content item "${title}" added successfully!`);
  setTitle('');
  setDescription('');*/
}

