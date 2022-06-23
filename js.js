const gerarGatinho = async() => {
    const apiGatinhos = 'https://api.thecatapi.com/v1/images/search';
    const waitGatinhos = await fetch(apiGatinhos);
    const imgGatinhos = await waitGatinhos.json();
    var gatinhoFofinho = imgGatinhos[0].url;

    document.getElementById('gatinhoGerado').innerHTML =  "<img height='350px' width='450px' src=" + gatinhoFofinho + ">";
}