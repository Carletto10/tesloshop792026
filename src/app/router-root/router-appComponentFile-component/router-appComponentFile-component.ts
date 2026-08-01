import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PuzzleItem {
  id: number;
  label: string;
}

@Component({
  selector: 'router-appComponentFile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router-appComponentFile-component.html',
  styleUrl: './router-appComponentFile-component.css'
})
export class RouteAppComponentFileComponent {
  expectedOrder = [`import { RouterLink, RouterOutlet } from '@angular/router;`,
            '@Component({', 
            'imports: [RouterOutlet, RouterLink],', 
            '<a routerLink="/secondRoute">Second Route Test</a></li>',
            '<router-outlet></router-outlet>'
          ];
  codeExample = `import { RouterLink, RouterOutlet } from '@angular/router; 
      \n<@Component({
      \nselector: "app-root",
      \nstandalone: true,   
      \nimports: [RouterOutlet, RouterLink],
      \ntemplateUrl: './app.component.html'
    })
    \n<a routerLink="/secondRoute">Second Route Test</a></li>
    \n<router-outlet></router-outlet>
    `;
  shuffledItems: PuzzleItem[] = [];
  droppedItems: Array<PuzzleItem | null> = [];
  feedback: string[] = [];
  isComplete = false;
  private draggedItem: PuzzleItem | null = null;

  constructor() {
    this.resetPuzzle();
  }

  dragItem(item: PuzzleItem): void {
    this.draggedItem = item;
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(index: number): void {
    if (!this.draggedItem) {
      return;
    }

    const isCorrect = this.draggedItem.label === this.expectedOrder[index];
    this.droppedItems[index] = this.draggedItem;
    this.feedback[index] = isCorrect ? '✅' : '❌';

    if (isCorrect) {
      this.shuffledItems = this.shuffledItems.filter(item => item.id !== this.draggedItem?.id);
    }

    this.isComplete = this.droppedItems.every((item, i) => item?.label === this.expectedOrder[i]);
    this.draggedItem = null;
  }

  resetPuzzle(): void {
    const items = this.expectedOrder.map((label, index) => ({ id: index, label }));
    this.shuffledItems = this.shuffle(items);
    this.droppedItems = Array(this.expectedOrder.length).fill(null);
    this.feedback = Array(this.expectedOrder.length).fill('');
    this.isComplete = false;
    this.draggedItem = null;
  }

  private shuffle(items: PuzzleItem[]): PuzzleItem[] {
    const copy = [...items];

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }
}
