
import { BookBST } from "../src/bookTree.js";

function запускТестов() {
  console.log("🧪 Запуск тестов бинарного дерева книг...");

  const tree = new BookBST();

  console.log("1️⃣ Тест добавления книг...");
  tree.insert(100, "Война и мир", "Л. Толстой", 1869);
  tree.insert(50, "Преступление и наказание", "Ф. Достоевский", 1866);
  tree.insert(150, "Мастер и Маргарита", "М. Булгаков", 1967);
  tree.insert(75, "Отцы и дети", "И. Тургенев", 1862);

  console.assert(tree.search(100)?.title === "Война и мир", "❌ Не удалось найти книгу с ISBN 100");
  console.assert(tree.search(50)?.title === "Преступление и наказание", "❌ Не удалось найти книгу с ISBN 50");
  console.assert(tree.search(150)?.title === "Мастер и Маргарита", "❌ Не удалось найти книгу с ISBN 150");
  console.assert(tree.search(75)?.title === "Отцы и дети", "❌ Не удалось найти книгу с ISBN 75");
  console.log("✅ Добавление книг прошло успешно\n");

  console.log("2️⃣ Тест обхода дерева (in-order)...");
  const списокISBN = [];
  tree.inOrder(node => списокISBN.push(node.isbn));
  console.assert(JSON.stringify(списокISBN) === JSON.stringify([50, 75, 100, 150]), "❌ Ошибка обхода дерева");
  console.log("✅ Обход дерева успешно завершён\n");

  console.log("3️⃣ Тест поиска...");
  console.assert(tree.search(75)?.title === "Отцы и дети", "❌ Поиск книги с ISBN 75 не работает");
  console.assert(tree.search(999) === null, "❌ Поиск несуществующей книги должен возвращать null");
  console.log("✅ Поиск работает корректно\n");

  console.log("4️⃣ Тест удаления листа...");
  tree.remove(75);
  console.assert(tree.search(75) === null, "❌ Книга с ISBN 75 не была удалена");
  console.log("✅ Лист успешно удалён\n");

  console.log("5️⃣ Тест удаления узла с одним ребёнком...");
  tree.insert(125, "Идиот", "Ф. Достоевский", 1869);
  tree.remove(150); // узел 150 имеет одного ребёнка 125
  console.assert(tree.search(150) === null, "❌ Узел с одним ребёнком не был удалён");
  console.assert(tree.search(125) !== null, "❌ Ребёнок удалённого узла пропал");
  console.log("✅ Узел с одним ребёнком удалён корректно\n");

  console.log("6️⃣ Тест удаления корня...");
  tree.remove(100);
  console.assert(tree.search(100) === null, "❌ Корень не был удалён");
  console.assert(tree.search(50) !== null, "❌ Дочерние узлы корня пропали");
  console.log("✅ Корень удалён успешно\n");

  console.log("🎉 Все тесты пройдены! Бинарное дерево работает корректно ✅");
}

запускТестов();
