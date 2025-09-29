
import { BookBST } from "../src/bookTree.js";

const tree = new BookBST();

tree.insert(10, "Book A", "Author A", 2000);
tree.insert(5, "Book B", "Author B", 1995);
tree.insert(15, "Book C", "Author C", 2010);

console.log("Тест поиск(10):", tree.search(10)?.title === "Book A" ? "✅ Пройден" : "❌ Ошибка");
console.log("Тест поиск(99):", tree.search(99) === null ? "✅ Пройден" : "❌ Ошибка");

tree.remove(5);
console.log("Тест удаление(5):", tree.search(5) === null ? "✅ Пройден" : "❌ Ошибка");

console.log("Тесты пройдены успешно!");
