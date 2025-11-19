abstract class Procedimento {
    protected nomeFuncionario: string;

    constructor(nomeFuncionario: string) {
        this.nomeFuncionario = nomeFuncionario;
    }

    public imprimirDescricaoProcedimento(prefixo: string = ""): void {
        
    }
}

class Vacina extends Procedimento {
    private nomeVacina: string;
    private validadeVacina: string;

    constructor(nomeFuncionario: string, nomeVacina: string, validadeVacina: string) {
        super(nomeFuncionario);
        this.nomeVacina = nomeVacina;
        this.validadeVacina = validadeVacina;
    }

    public imprimirDescricaoProcedimento(prefixo: string = ""): void {
        console.log(`${prefixo}Procedimento: Vacina | ${this.nomeFuncionario} | ${this.nomeVacina} | ${this.validadeVacina}`);
    }
}

class Banho extends Procedimento {
    private shampoo: string;

    constructor(nomeFuncionario: string, shampoo: string) {
        super(nomeFuncionario);
        this.shampoo = shampoo;
    }

    public imprimirDescricaoProcedimento(prefixo: string = ""): void {
        console.log(`${prefixo}Procedimento: Banho | ${this.nomeFuncionario} | ${this.shampoo}`);
    }
}

class Tosa extends Procedimento {
    private tipoTosa: string;

    constructor(nomeFuncionario: string, tipoTosa: string) {
        super(nomeFuncionario);
        this.tipoTosa = tipoTosa;
    }

    public imprimirDescricaoProcedimento(prefixo: string = ""): void {
        console.log(`${prefixo}Procedimento: Tosa | ${this.nomeFuncionario} | ${this.tipoTosa}`);
    }
}

class Animal {
    private nome: string;
    private raca: string;
    private tipo: string;
    private procedimentos: Procedimento[] = [];

    constructor(nome: string, raca: string, tipo: string) {
        this.nome = nome;
        this.raca = raca;
        this.tipo = tipo;
    }
    
    public getNome(): string {
        return this.nome;
    }

    public getRaca(): string {
        return this.raca;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public adicionaProcedimento(procedimento: Procedimento): void {
        this.procedimentos.push(procedimento);
    }

    public retornaProcedimentos(): Procedimento[] {
        return this.procedimentos;
    }
}

class Cliente {
    public nome: string;
    public endereco: string;
    public telefone: string;
    private animais: Animal[] = [];

    constructor(nome: string, endereco: string, telefone: string) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    public adicionarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    public retornaAnimais(): Animal[] {
        return this.animais;
    }

    public buscaAnimal(nome: string): Animal | undefined {
        const animalEncontrado = this.animais.find(a => a.getNome() === nome);
        return animalEncontrado;
    }
}


class Teste {
    public static main(): Cliente[] {
        
        const clientes: Cliente[] = [];

        
        const clienteJoao = new Cliente("João Silva", "Rua Mato Grosso, 15, Rondonopolis", "66 98744-5474");
        
        const animalRex = new Animal("Rex", "Pastor alemão", "Cachorro");
        animalRex.adicionaProcedimento(new Vacina("Fátima", "Anti Rábica", "12/08/2017"));
        animalRex.adicionaProcedimento(new Banho("Rodrigo", "Anti Rugas"));
        animalRex.adicionaProcedimento(new Banho("Rodrigo", "Anti Carrapatos"));
        animalRex.adicionaProcedimento(new Tosa("Marcela", "Geral"));
        
        const animalBidu = new Animal("Bidu", "Schnauzer", "Cachorro");
        animalBidu.adicionaProcedimento(new Vacina("Fátima", "Anti Carrapatos", "08/12/2018"));
        
        clienteJoao.adicionarAnimal(animalRex);
        clienteJoao.adicionarAnimal(animalBidu);
        clientes.push(clienteJoao);

        
        const clienteMariana = new Cliente("Mariana Ferraz", "Av. Brasil, 400-Rondonopolis", "66 3235-9879");
        
        const animalPingo = new Animal("Pingo", "Persa", "Gato");
        animalPingo.adicionaProcedimento(new Banho("Rodrigo", "Anti Pulgas"));
        
        const animalTigo = new Animal("Tigo", "Shitzu", "Cachorro");
        animalTigo.adicionaProcedimento(new Tosa("Marcela", "Higiência Persa"));
        animalTigo.adicionaProcedimento(new Vacina("Fátima", "Anti Rábica", "01/01/2018"));
        
        clienteMariana.adicionarAnimal(animalPingo);
        clienteMariana.adicionarAnimal(animalTigo);
        clientes.push(clienteMariana);

        
        const clienteGabriela = new Cliente("Gabriela Brito", "Rua Dom Pedro, 2344-Rondonópolis", "04/02/2017");
        
        const animalBinga = new Animal("Binga", "Poodle", "Cachorra");
        animalBinga.adicionaProcedimento(new Banho("Rodrigo", "Anti Pulgas"));
        animalBinga.adicionaProcedimento(new Vacina("Fátima", "Anti Rábica", "12/08/2017"));
        animalBinga.adicionaProcedimento(new Tosa("Marcela", "Geral"));
        
        clienteGabriela.adicionarAnimal(animalBinga);
        clientes.push(clienteGabriela);

        console.log("--- Array de Clientes criado (Exercício 2) ---");
        return clientes;
    }

    
    public static imprimirDados(clientes: Cliente[]): void {
        console.log("\n--- Impressão de Clientes, Animais e Procedimentos (Exercício 3) ---");
        
        for (const cliente of clientes) {
            console.log(`\nCliente: ${cliente.nome} | ${cliente.endereco} | ${cliente.telefone}`);
            
            const animais = cliente.retornaAnimais();
            if (animais.length === 0) {
                console.log("  (Este cliente não possui animais cadastrados)");
            }

            for (const animal of animais) {
                console.log(`  Animal: ${animal.getNome()} | ${animal.getRaca()} | ${animal.getTipo()}`);
                
                const procedimentos = animal.retornaProcedimentos();
                if (procedimentos.length === 0) {
                    console.log("    (Este animal não possui procedimentos)");
                }

                for (const proc of procedimentos) {
                    
                    proc.imprimirDescricaoProcedimento("    ");
                }
            }
        }
    }
}



const arrayDeClientes = Teste.main();


Teste.imprimirDados(arrayDeClientes);