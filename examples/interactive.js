
import readline from "node:readline";
import { BookBST } from "../src/bookTree.js";

const tree = new BookBST();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "📚 book-archive> "
});

console.log("Интерактивная работа с бинарным деревом книг");
console.log("Команды: add, remove, search, list, exit");

rl.prompt();

rl.on("line", (line) => {
  const input = line.trim().split(" ");
  const cmd = input[0];

  switch(cmd) {
    case "add":
      if(input.length < 5){
        console.log("Использование: add ISBN 'Название' 'Автор' Год");
        break;
      }
      const isbn = Number(input[1]);
      const title = input[2];
      const author = input[3];
      const year = Number(input[4]);
      tree.insert(isbn, title, author, year);
      console.log(`✅ Книга добавлена: ${title}`);
      break;

    case "remove":
      if(input.length < 2){
        console.log("Использование: remove ISBN");
        break;
      }
      tree.remove(Number(input[1]));
      console.log(`❌ Книга с ISBN ${input[1]} удалена`);
      break;

    case "search":
      if(input.length < 2){
        console.log("Использование: search ISBN");
        break;
      }
      const b = tree.search(Number(input[1]));
      console.log(b ? `🔍 Найдена книга: ${b.title} (${b.author}, ${b.year})` : "❌ Книга не найдена");
      break;

    case "list":
      console.log("📚 Все книги (in-order):");
      tree.inOrder(node => {
        console.log(`${node.isbn} — ${node.title} (${node.author}, ${node.year})`);
      });
      break;

    case "exit":
      rl.close();
      return;

    default:
      console.log("Неизвестная команда. Используйте: add, remove, search, list, exit");
  }

  rl.prompt();
}).on("close", () => {
  console.log("Выход из интерактивного режима");
  process.exit(0);
});
