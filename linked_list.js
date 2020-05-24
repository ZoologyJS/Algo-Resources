// Linked List
class Node {
   constructor(element){
      this.element = element;
      this.next = null;
   }
}

class LinkedList{
   constructor(){
      this.head = null;
      this.size = 0;
   }

   // Adds an element at the end of the list
   add(element){
      // Creates new node
      let node = new Node(element);

      // Storing current node
      let current;

      // If list is empty, add the element and make it the head
      if (this.head == null){
         this.head = node;
      } else {
         current = this.head;

         // iterate to the end of the list
         while (current.next){
            current = current.next;
         }
         // add node
         current.next = node;
      }
      this.size++;
   }

   // Insert element at the position index of the list
   insertAt(element, index){
      if (index > 0 && index > this.size){
         return false;
      } else {
         let node = new Node(element);
         let curr;
         let prev;
         curr = this.head;

         // Add the element to the first index
         if (index == 0){
            node.next = head;
            this.head = node;
         } else {
            curr = this.head;
            let it = 0;

            while (it < index){
               it++;
               prev = curr;
               cur = curr.next;
            }
            this.size++;
         }
      }
   }

   // Removes element from the specified location
   removeFrom(index){
      if (index > 0 && index > this.size){
         return -1;
      } else {
         let curr;
         let prev;
         it = 0;
         curr = this.head;
         prev = curr;

         // Deleting first element
         if (index == 0){
            this.head = curr.next;
         } else {
            // Iterate over the list to the position to remove an element
            while (it < index) {
               it++;
               prev = curr;
               curr = curr.next;
            }
            // Remove element
            prev.next = curr.next;
         }
         this.size--;
         return curr.element;
      }
   }

   // Removes a given element from the list
   removeElement(element){
      let current = this.head;
      let prev = null;

      // Iterate over the lsit
      while (current != null){
         // Comparing element with current element. If found, then remove and return true
         if (current.element == element){
            if (prev == null){
               this.head = current.next;
            } else {
               prev.next = current.next;
            }
            this.size--;
            return current.element;
         }
         prev = current;
         current = current.next;
      }
      return -1;
   }

   // Finds the index of the element
   indexOf(element){
      let count = 0;
      let current = this.head;

      while (current != null){
         if (current.element == element){
            return count;
         }
         count++;
         current = current.next;
      }
      return -1;
   }
}
