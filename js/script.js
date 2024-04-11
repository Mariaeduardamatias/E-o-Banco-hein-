let saldo = 100.5; 
const senhaCorreta = '3589';
let nomeUsuario = '';

// Mensagem de boas-vindas
function exibirBoasVindas() {
    nomeUsuario = prompt('Digite seu nome:');
    alert(`Olá ${nomeUsuario}, é um prazer ter você por aqui!`);
}

// Validar a senha
function validarSenha() {
    const senha = prompt('Informe sua senha:');
    if (senha !== senhaCorreta) {
        alert('Senha incorreta. Tente novamente.');
        return false;
    }
    return true;
}

// Exibir o saldo
function acessarSaldo() {
    if (validarSenha()) {
        alert(`Seu saldo atual é: ${saldo.toFixed(2)}`);
    } else {
        inicio(); 
    }
}

// Exibir o extrato (ainda não implementada)
function acessarExtrato() {
    alert('Função de extrato ainda não implementada.');
    inicio(); 
}

// Realizar saques
function fazerSaque() {
    if (validarSenha()) {
        const saque = parseFloat(prompt('Qual o valor para saque?'));
        if (isNaN(saque) || saque <= 0) {
            alert('Operação não autorizada. Valor inválido.');
        } else if (saque > saldo) {
            alert('Operação não autorizada. Saldo insuficiente.');
        } else {
            saldo -= saque;
            alert(`Saque de ${saque.toFixed(2)} realizado com sucesso.`);
            alert(`Saldo atual: ${saldo.toFixed(2)}`);
        }
    } else {
        inicio(); 
    }
}

// Realizar depósitos
function fazerDeposito() {
    if (validarSenha()) {
        const deposito = parseFloat(prompt('Qual o valor para depósito?'));
        if (isNaN(deposito) || deposito <= 0) {
            alert('Operação não autorizada. Valor inválido.');
        } else {
            saldo += deposito;
            alert(`Depósito de ${deposito.toFixed(2)} realizado com sucesso.`);
            alert(`Saldo atual: ${saldo.toFixed(2)}`);
        }
    } else {
        inicio(); 
    }
}

// Realizar transferências (ainda não implementada)
function fazerTransferencia() {
    alert('Função de transferência ainda não implementada.');
    inicio(); 
}

// Função para sair do sistema
function sair() {
    alert(`Obrigada por utilizar os serviços do banco, ${nomeUsuario}!`);
    
}

// Função para exibir mensagem de erro
function erro() {
    alert('Opção inválida. Tente novamente.');
    inicio(); 
}

// Função inicia o sistema
function inicio() {
    exibirBoasVindas();

    let escolha;
    do {
        escolha = parseInt(prompt(
            `Selecione uma opção:
            1.) Saldo
            2.) Extrato
            3.) Saque
            4.) Depósito
            5.) Transferência
            6.) Sair`
        ));
        switch (escolha) {
            case 1:
                acessarSaldo();
                break;
            case 2:
                acessarExtrato();
                break;
            case 3:
                fazerSaque();
                break;
            case 4:
                fazerDeposito();
                break;
            case 5:
                fazerTransferencia();
                break;
            case 6:
                sair();
                break;
            default:
                erro();
        }
    } while (escolha !== 6);
}


inicio();