// Importa biblioteca para leitura de dados
import * as readlineSync from "readline-sync";

// Importa a classe Stack
import { Stack } from "./Stack";

// Cria uma pilha de livros (strings)
const pilha = new Stack<string>();
let opcao: number;

do {
    // Exibe o menu
    console.log("\n1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");

    // Lê a opção do usuário
    opcao = readlineSync.questionInt("Entre com a opção desejada: ");

    // Executa a opção escolhida
    switch (opcao) {
        case 1:
            // Adiciona um novo livro na pilha
            const livro = readlineSync.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log("\nLivro Adicionado!\n");
            break;
        case 2:
            // Lista os livros da pilha
            console.log("\nLivros na Pilha:");
            pilha.printStack();
            break;
        case 3:
            // Remove o livro do topo
            if (pilha.isEmpty()) console.log("\nA Pilha está vazia!\n");
            else {
                pilha.pop();
                console.log("\nLivro Removido!\n");
                pilha.printStack();
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
} while (opcao !== 0); // Repete até o usuário escolher sair
