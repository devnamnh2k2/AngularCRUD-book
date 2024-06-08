import { Component, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/book';
import { HttpClient } from '@angular/common/http';
import { EnumType } from 'typescript';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  listBook: Book[] = [];
  API_URL!: string;
  searchText: any;
  mode: 'view' | 'edit' = 'view';
  book: Book | null = null;
  constructor(
    // private http: HttpClient
  ) { }
  ngOnInit(): void {
    // this.getBooks();
  }

  getBooks() {
    // this.http.get<Book[]>(this.API_URL).subscribe(res => {
    //   this.listBook = res;
    // });
  }

  search(event: any) {
    this.searchText = (event.target as HTMLInputElement).value;
    this.listBook.filter(item => item.title.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  viewDetail(id: number) {
    this.mode = 'view'
    //fetch API --> obj book
  }

  updateBook(id: number) {
    this.mode = 'edit'
  }

  removeBook(id: number) {
    this.listBook.findIndex(book => book.book_id === id);
  }
  updateBookDetail(event: FormGroup) {
    console.log(event, 'line 50');
    //fetch API --> update book
  }

}
