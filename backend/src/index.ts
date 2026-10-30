const projeto: string = "DevPulse";
const versao: number = 1;

console.log(projeto, versao);

async function verificarAPI(url: string) {
  const inicio = performance.now();
  try {
    const resposta = await fetch(url);

    const fim = performance.now();

    const latencia = fim - inicio;

    console.log(`API: ${url} | Status: ${resposta.status} | Latência: ${latencia.toFixed(2)} ms`);
  } catch {
    console.log("Falha ao conectar a API");
  }
}

verificarAPI("https://www.google.com");
verificarAPI("https://api.github.com");
verificarAPI("https://example.com");