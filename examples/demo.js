// examples/demo.js
import { BookBST } from "../src/bookTree.js";

const tree = new BookBST();

// Добавляем книги
tree.insert(978, "Война и мир", "Л. Толстой", 1869);
tree.insert(123, "Преступление и наказание", "Ф. Достоевский", 1866);
tree.insert(456, "Мастер и Маргарита", "М. Булгаков", 1967);
tree.insert(789, "Отцы и дети", "И. Тургенев", 1862);

// Обход (по ISBN)
console.log("📚 Все книги (in-order):");
tree.inOrder(node => {
  console.log(`${node.isbn} — ${node.title} (${node.author}, ${node.year})`);
});

// Поиск
console.log("\n🔍 Поиск книги с ISBN 456:");
const book = tree.search(456);
console.log(book ? `Найдена: ${book.title}` : "Не найдено");

// Удаление
console.log("\n❌ Удаление книги с ISBN 123...");
tree.remove(123);

// Повторный обход
console.log("\n📚 Все книги после удаления:");
tree.inOrder(node => {
  console.log(`${node.isbn} — ${node.title} (${node.author}, ${node.year})`);
});
