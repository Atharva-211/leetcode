from collections import deque

class FIFO:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if self.is_empty():
            return None
        return self.queue.popleft()

    def is_empty(self):
        return len(self.queue) == 0

    def size(self):
        return len(self.queue)

    def peek(self):
        if self.is_empty():
            return None
        return self.queue[0]

# Example usage:
fifo = FIFO()
fifo.enqueue(1)
fifo.enqueue(2)
fifo.enqueue(3)
print(fifo.dequeue())  # Output: 1
print(fifo.peek())     # Output: 2
print(fifo.size())     # Output: 2