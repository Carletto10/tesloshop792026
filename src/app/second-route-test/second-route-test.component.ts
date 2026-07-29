import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PuzzleItem {
  id: number;
  label: string;
}

@Component({
  selector: 'app-second-route-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-route-test.component.html',
  styleUrl: './second-route-test.component.css'
})
export class SecondRouteTestComponent {
  expectedOrder = ['getDataFromApi() :', 'Observable<Usuario[]>', ' { return this.http.get', 'http://localhost:8080/users }'];
  codeExample = 'getDataFromApi() : Observable<Usuario[]> { return this.http.get<Usuario[]>(\'http://localhost:8080/users\'); }';
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
