// Classe genérica de Fila (Queue)
export class Queue<T> {
    private items: T[] = []; // Armazena os elementos da fila

    // Adiciona um item ao final da fila
    enqueue(item: T): void {
        this.items.push(item);
    }

    // Remove o primeiro item da fila
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Verifica se a fila está vazia
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Exibe os itens da fila
    printQueue(): void {
        if (this.isEmpty()) console.log("\nA Fila está vazia!\n");
        else this.items.forEach(i => console.log(i));
    }
}
