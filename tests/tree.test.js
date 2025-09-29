// tests/tree.test.js
import { BookBST } from "../src/bookTree.js";

function runTests() {
  console.log("🧪 Запуск тестов BookBST...");

  const tree = new BookBST();

  // Test 1: insert
  tree.insert(10, "Book A", "Author A", 2000);
  tree.insert(5, "Book B", "Author B", 1995);
  tree.insert(15, "Book C", "Author C", 2010);
  console.assert(tree.search(10)?.title === "Book A", "❌ Test insert/search failed for 10");
  console.assert(tree.search(5)?.title === "Book B", "❌ Test insert/search failed for 5");
  console.assert(tree.search(15)?.title === "Book C", "❌ Test insert/search failed for 15");

  // Test 2: in-order traversal
  const inOrderKeys = [];
  tree.inOrder(node => inOrderKeys.push(node.isbn));
  console.assert(JSON.stringify(inOrderKeys) === JSON.stringify([5,10,15]), "❌ Test inOrder traversal failed");

  // Test 3: remove leaf node
  tree.remove(5);
  console.assert(tree.search(5) === null, "❌ Test remove leaf node failed");

  // Test 4: remove node with one child
  tree.insert(12, "Book D", "Author D", 2005);
  tree.remove(15); // 15 has one child 12
  console.assert(tree.search(15) === null, "❌ Test remove node with one child failed");
  console.assert(tree.search(12) !== null, "❌ Test child of removed node missing");

  // Test 5: remove root node
  tree.remove(10);
  console.assert(tree.search(10) === null, "❌ Test remove root node failed");

  console.log("✅ Все тесты пройдены!");
}

runTests();
