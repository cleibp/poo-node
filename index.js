// Classe base abstrata (com abstração)
class Forma {
    calcularArea() {
        throw new Error('Método abstrato deve ser implementado nas subclasses');
    }
}

// Subclasse que herda de Forma
class Retangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

// Subclasse que herda de Forma
class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}

// Função principal
function main() {
    // Criar uma forma de retângulo
    const retangulo = new Retangulo(5.0, 4.0);

    // Calcular e imprimir a área do retângulo
    console.log('Área do Retângulo:', retangulo.calcularArea());

    // Criar uma forma de círculo
    const circulo = new Circulo(3.0);

    // Calcular e imprimir a área do círculo
    console.log('Área do Círculo:', circulo.calcularArea());
}

// Executar a função principal
main();
