let q = firstElementOfList; // Assuming firstElementOfList is the first element of the list
do {
    strength += strengths[q.data.index];
    q = q.next;
} while (q !== null);
