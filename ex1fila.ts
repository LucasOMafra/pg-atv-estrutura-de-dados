// Importa a biblioteca readline-sync para ler dados do teclado
import * as readlineSync from "readline-sync";

// Importa a classe Queue (Fila) criada em outro arquivo
import { Queue } from "./Queue";

// Cria uma nova fila que armazenará nomes (strings)
const fila = new Queue<string>();

// Variável para armazenar a opção digitada pelo usuário
let opcao: number;

do {
    // Exibe o menu de opções
    console.log("\n1 - Adicionar Cliente");
    console.log("2 - Listar Clientes");
    console.log("3 - Chamar Cliente");
    console.log("0 - Sair");

    // Lê a opção do usuário
    opcao = readlineSync.questionInt("Digite uma opção: ");

    // Executa a ação conforme a opção escolhida
    switch (opcao) {
        case 1:
            // Adiciona um novo cliente na fila
            const nome = readlineSync.question("Digite o nome: ");
            fila.enqueue(nome);
            console.log("\nCliente Adicionado!\n");
            break;
        case 2:
            // Mostra todos os clientes na fila
            console.log("\nLista de Clientes na Fila:");
            fila.printQueue();
            break;
        case 3:
            // Chama (remove) o primeiro cliente da fila
            if (fila.isEmpty()) console.log("\nA Fila está vazia!\n");
            else {
                fila.dequeue();
                console.log("\nO Cliente foi Chamado!\n");
                fila.printQueue();
            }
            break;
        case 0:
            // Finaliza o programa
            console.log("\nPrograma Finalizado!\n");
            break;
        default:
            // Caso o usuário digite uma opção inválida
            console.log("\nOpção Inválida!\n");
    }
    
// Repete até que o usuário escolha sair
} while (opcao !== 0); // Repete até que o usuário escolha sair
