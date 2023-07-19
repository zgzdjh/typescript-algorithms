// 封装一个栈,限制的操作
export class ArrayStack<T> {
    private data: T[] = []

    push(element: T): void {
        this.data.push(element)
    }

    pop():T | undefined {
        return this.data.pop()
    }

    peek():T | undefined {
        return this.data[this.data.length - 1]
    }

    isEmpty(): boolean {
        return this.data.length == 0
    }
    
    size(): number {
        return this.data.length
    }
}

const stack = new ArrayStack<string>()

module.exports = {
    stack
}