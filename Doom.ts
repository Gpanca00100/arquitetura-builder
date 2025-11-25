// CLASSE PRODUTO
// Descrição: Representa o objeto complexo final que está sendo construído (o herói, inimigo, ...).
class Personagem {
    public nome: string;
    public classe: string;
    public arma: string;
    public nivel: number;
    public pontosDeVida: number;
    public pontosDeMana: number;

    // Construtor: Inicia o objeto com o nome e atributos padrão.
    constructor(nome: string) {
        this.nome = nome;
        this.classe = 'Novato';
        this.arma = 'Punhos';
        this.nivel = 1;
        this.pontosDeVida = 100;
        this.pontosDeMana = 10;
    }

    // Método: Utilitário para exibir o estado final do objeto.
    public exibirStatus(): void {
        console.log(`
        Nome: ${this.nome} | Classe: ${this.classe}
        Nível: ${this.nivel} | Arma: ${this.arma}
        HP: ${this.pontosDeVida} | MP: ${this.pontosDeMana}
        `);
    }
}

// INTERFACE CONSTRUTOR
// Descrição: Define o contrato com os passos de construção disponíveis para configurar o Personagem.
interface IConstrutorDePersonagem {
    definirClasse(classe: 'Curandeiro' | 'Atacante' | 'Tanque'): this;
    definirArma(arma: string): this;
    definirNivel(nivel: number): this;
    definirPontosDeVida(hp: number): this;
    definirPontosDeMana(mp: number): this;
    construir(): Personagem;
}

// CLASSE CONSTRUTOR CONCRETO
// Descrição: Implementa os passos de construção, mantendo e modificando a instância do objeto internamente.
class ConstrutorDePersonagemJogo implements IConstrutorDePersonagem {
    private personagem: Personagem;

    // Construtor: Cria uma nova instância básica de Personagem para ser configurada
    constructor(nome: string) {
        this.personagem = new Personagem(nome);
    }

    public definirClasse(classe: 'Curandeiro' | 'Atacante' | 'Tanque'): this {
        this.personagem.classe = classe;
        return this;
    }
    
    public definirArma(arma: string): this {
        this.personagem.arma = arma;
        return this;
    }
    
    public definirNivel(nivel: number): this {
        this.personagem.nivel = nivel;
        return this;
    }
    
    public definirPontosDeVida(hp: number): this {
        this.personagem.pontosDeVida = hp;
        return this;
    }

    public definirPontosDeMana(mp: number): this {
        this.personagem.pontosDeMana = mp;
        return this;
    }

    // Método: Retorna o objeto Personagem finalizado.
    public construir(): Personagem {
        return this.personagem;
    }
}

// CLASSE DIRETOR 
// Descrição: Classe utilitária que define receitas de construção para os modelos.
class Diretor {
    // Método: Receita para um personagem Chefão
    static criarChefao(construtor: ConstrutorDePersonagemJogo): Personagem {
        return construtor
            .definirClasse('Tanque')
            .definirArma('Martelo Gigante')
            .definirPontosDeVida(5000)
            .definirNivel(99)
            .construir();
    }
    // Método: Receita para um personagem Atirador
    static criarAtirador(construtor: ConstrutorDePersonagemJogo): Personagem {
        return construtor
            .definirClasse('Atacante')
            .definirArma('Escopeta')
            .definirPontosDeVida(150)
            .definirNivel(10)
            .construir();
    }
}


// EXECUÇÃO:

// Ex.1: Construção customizada
const construtorCustomizado = new ConstrutorDePersonagemJogo('Doom Slayer');
const jogador1 = construtorCustomizado
    .definirClasse('Atacante')
    .definirArma('BFG 9000')
    .definirPontosDeVida(200)
    .construir();
jogador1.exibirStatus();

// Ex.2: Construção via Diretor
const construtorInimigo = new ConstrutorDePersonagemJogo('Cyberdemon');
const chefao = Diretor.criarChefao(construtorInimigo);
chefao.exibirStatus();