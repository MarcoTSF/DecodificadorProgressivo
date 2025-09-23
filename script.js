const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function decifrarCesarVariavel(ciphertext) {
    if (!ciphertext) return "";
    const palavras = ciphertext.trim().split(' ');
    let mensagemDecifrada = '';
    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        const deslocamento = i + 1;
        let palavraDecifrada = '';
        for (let j = 0; j < palavra.length; j++) {
            const letraCifrada = palavra[j];
            const posicaoOriginal = alfabeto.indexOf(letraCifrada);
            if (posicaoOriginal !== -1) {
                let novaPosicao = (posicaoOriginal - deslocamento + 26) % 26;
                palavraDecifrada += alfabeto[novaPosicao];
            } else {
                palavraDecifrada += letraCifrada;
            }
        }
        mensagemDecifrada += palavraDecifrada + ' ';
    }
    return mensagemDecifrada.trim();
}

function codificarCesarVariavel(plaintext) {
    if (!plaintext) return "";
    const palavras = plaintext.trim().split(' ');
    let mensagemCifrada = '';
    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i].toUpperCase();
        const deslocamento = i + 1;
        let palavraCifrada = '';
        for (let j = 0; j < palavra.length; j++) {
            const letraPlana = palavra[j];
            const posicaoOriginal = alfabeto.indexOf(letraPlana);
            if (posicaoOriginal !== -1) {
                let novaPosicao = (posicaoOriginal + deslocamento) % 26;
                palavraCifrada += alfabeto[novaPosicao];
            } else {
                palavraCifrada += letraPlana;
            }
        }
        mensagemCifrada += palavraCifrada + ' ';
    }
    return mensagemCifrada.trim();
}

const inputCipherTextArea = document.getElementById('input-ciphertext');
const outputPlainTextArea = document.getElementById('output-plaintext');
const decryptButton = document.getElementById('decrypt-button');

inputCipherTextArea.value = "FTUB OGPUCIGO IRL HIGMJVEHE";

function handleDecrypt() {
    const ciphertext = inputCipherTextArea.value.toUpperCase();
    const plaintext = decifrarCesarVariavel(ciphertext);
    outputPlainTextArea.value = plaintext;
}
decryptButton.addEventListener('click', handleDecrypt);
handleDecrypt();

const inputPlainTextArea = document.getElementById('input-plaintext');
const outputCipherTextArea = document.getElementById('output-ciphertext');
const encryptButton = document.getElementById('encrypt-button');

inputPlainTextArea.value = "THIS IS A SECRET MESSAGE";

function handleEncrypt() {
    const plaintext = inputPlainTextArea.value;
    const ciphertext = codificarCesarVariavel(plaintext);
    outputCipherTextArea.value = ciphertext;
}
encryptButton.addEventListener('click', handleEncrypt);
handleEncrypt();