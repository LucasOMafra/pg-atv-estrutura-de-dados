// Classe que representa uma Pilha genérica
export class Stack<T> {
    private items: T[] = []; // Armazena os elementos da pilha

    // Adiciona um item no topo da pilha
    push(item: T): void {
        this.items.push(item);
    }

    // Remove e retorna o item do topo da pilha
    pop(): T | undefined {
        return this.items.pop();
    }

    // Verifica se a pilha está vazia
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Mostra os itens da pilha
    printStack(): void {
        if (this.isEmpty()) console.log("\nA Pilha está vazia!\n");
        else this.items.forEach(i => console.log(i));
    }
}
