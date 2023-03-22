/*
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})


export class CreateContentComponent implements OnInit {

  id!: number;
  title!: string;
  description!: string;
  imgURL!: string;
  type!: string;
  tags!: string;
  creator!: string;

  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  newContent = {
    id: 0,
    title: '',
    description: '',
    imgURL: '',
    type: '',
    tags: '',
    creator: ''
  };

  @Output() contentCreated = new EventEmitter<any>();

  onSubmit() {
    return new Promise((resolve, reject) => {
      // Validate input fields
      if (!this.newContent.id
        || !this.newContent.title
        || !this.newContent.description
        || !this.newContent.imgURL
        || !this.newContent.type
        || !this.newContent.tags
        || !this.newContent.creator) {
        reject('Please fill in all fields.');
        return;
      }

      // Send new content item to ContentList
      this.contentCreated.emit(this.newContent);

      // Clear input fields
      this.newContent = {
        id: 0,
        title: '',
        description: '',
        imgURL: '',
        type: '',
        tags: '',
        creator: ''
      };

      // Log success message
      console.log(`Successfully added content: ${this.newContent.title}`);

      resolve(this.newContent);
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
*/








import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  addContent() {
    this.onCreation.emit(this.newContent);
    this.newContent = {};
  }

}









/*
export class CreateContentComponent {
 

  @Output() contentAdded = new EventEmitter<Content>();
  newContent: Content = {
    id: 0, title: '', description: '', imgURL: '' || undefined, type: '' || undefined, tags: [], creator: ''
  }
  errorMessage: string = '';

  id!: number;
  title!: string;
  description!: string;
  imgURL: string = '';
  type: string = '';
  tags!: string[];
  creator!: string;

  onSubmit() {
    const promise = new Promise<Content>((resolve, reject) => {
      // Add the new content to the array of existing content in the parent component
      const newContent = this.newContent;
      this.contentAdded.emit(newContent);

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
    this.newContent = { id: 0, title: '', description: '', imgURL: '', type: '', tags: [], creator: ''};
    this.errorMessage = '';
  }


  function createContentItem(title, description) {
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
  setDescription('');
}
*/
