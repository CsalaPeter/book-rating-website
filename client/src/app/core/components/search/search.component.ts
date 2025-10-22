import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrl: './search.component.css',
	imports: [FormsModule, CommonModule, MatButtonModule, MatIconModule],
})
export class SearchComponent {}
