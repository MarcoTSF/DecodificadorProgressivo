const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// ===== DECIFRAR =====
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

// ===== CODIFICAR =====
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

// ===== ELEMENTOS =====
const inputCipherTextArea = document.getElementById('input-ciphertext');
const outputPlainTextArea = document.getElementById('output-plaintext');
const decryptButton = document.getElementById('decrypt-button');

const inputPlainTextArea = document.getElementById('input-plaintext');
const outputCipherTextArea = document.getElementById('output-ciphertext');
const encryptButton = document.getElementById('encrypt-button');

// ===== HANDLERS =====
function handleDecrypt() {
    const ciphertext = inputCipherTextArea.value.toUpperCase();
    const plaintext = decifrarCesarVariavel(ciphertext);
    outputPlainTextArea.value = plaintext;
}

function handleEncrypt() {
    const plaintext = inputPlainTextArea.value;
    const ciphertext = codificarCesarVariavel(plaintext);
    outputCipherTextArea.value = ciphertext;
}

decryptButton.addEventListener('click', handleDecrypt);
encryptButton.addEventListener('click', handleEncrypt);

// ===== COPIAR / COLAR =====
function copiarTexto(elementId) {
    const textarea = document.getElementById(elementId);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textarea.value);
}

function colarTexto(elementId) {
    navigator.clipboard.readText().then(texto => {
        document.getElementById(elementId).value = texto;
    });
}