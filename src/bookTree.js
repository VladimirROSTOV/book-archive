// src/bookTree.js

class BookNode {
    constructor(isbn, title, author, year) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.year = year;
      this.left = null;
      this.right = null;
    }
  }
  
  class BookBST {
    constructor() {
      this.root = null;
    }
  
    insert(isbn, title, author, year) {
      const newNode = new BookNode(isbn, title, author, year);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (isbn < current.isbn) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  
    search(isbn) {
      let current = this.root;
      while (current) {
        if (isbn === current.isbn) return current;
        current = isbn < current.isbn ? current.left : current.right;
      }
      return null;
    }
  
    inOrder(callback) {
      function traverse(node) {
        if (!node) return;
        traverse(node.left);
        callback(node);
        traverse(node.right);
      }
      traverse(this.root);
    }
  
    remove(isbn, node = this.root) {
      if (!node) return null;
  
      if (isbn < node.isbn) {
        node.left = this.remove(isbn, node.left);
        return node;
      } else if (isbn > node.isbn) {
        node.right = this.remove(isbn, node.right);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right; 
        if (!node.right) return node.left; 
  
        let minRight = node.right;
        while (minRight.left) minRight = minRight.left;
  
        node.isbn = minRight.isbn;
        node.title = minRight.title;
        node.author = minRight.author;
        node.year = minRight.year;
  
        node.right = this.remove(minRight.isbn, node.right);
        return node;
      }
    }
  }
  
  export { BookBST, BookNode };
  