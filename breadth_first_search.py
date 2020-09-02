from collections import deque

# Breadth-First Traversal of a Binary Tree
# Given a tree (binary tree), prints all it's elements by level (breadth first traversal)

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.level = None

    def __str__(self):
        return str(self.val)

def BFT(node):
    node.level = 1
    queue = deque([node])
    current_level = node.level
    output = []

    while len(queue) > 0:

        current_node = queue.popleft()

        if node.level > current_level:
            output.append("\n")
            current_level += 1

        output.append(str(current_node))
        
        if current_node.left != None:
            current_node.left.level = current_level + 1
            queue.append(current_node.left)

        
        if current_node.right != None:
            current_node.right.level = current_level + 1
            queue.append(current_node.right)
        
    return "".join(output)

root = Node(9)
root.left = Node(5)
root.right = Node(6)
root.left.left = Node(10)
root.left.right = Node(12)
root.right.left = Node(20)
root.right.right = Node(25)

print(BFT(root))
