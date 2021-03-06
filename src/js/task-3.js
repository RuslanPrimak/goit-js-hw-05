"use strict";

const TASK_NAME = "========================= Task 3 =========================";
console.group(TASK_NAME);

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);

    if (index < 0) return;

    this.items.splice(index, 1);
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = Array.from(storage.getItems());
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(Array.from(storage.items)); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(Array.from(storage.items)); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

console.groupEnd(TASK_NAME);
