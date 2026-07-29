# Puzzle Component Instructions

This document summarizes the steps used to create the drag-and-drop puzzle for the route-test component.

## What was implemented
- Created a standalone Angular component in `src/app/route-test/route-test.component.ts`.
- Added a draggable word bank with items taken from the sample code snippet.
- Added drop targets that represent the expected order of the words.
- Added visual feedback with check and cross markers.
- Removed correctly placed words from the bottom bank so the puzzle gets shorter as the user progresses.
- Styled the component with a horizontal layout for the drop slots.

## Main structure
1. Define the expected word order.
2. Shuffle the words into a draggable list.
3. Track the dropped items in an array.
4. Compare each dropped word with the expected position.
5. Show a success state when all words are placed correctly.
6. Allow the puzzle to be reset and shuffled again.

## Key files
- `src/app/route-test/route-test.component.ts`
- `src/app/route-test/route-test.component.html`
- `src/app/route-test/route-test.component.css`

## Notes
The puzzle was designed as a simple educational example for practicing Angular drag-and-drop behavior and template binding.
