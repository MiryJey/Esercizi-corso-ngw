//definisco la funzione
//INPUT : una lista di numeri da sommare
//OUTPUT : il risultato
function sommalista(lista){
    let risultato = 0;
    for(let i = 0; i < lista.length; i++){
        //il risultato ogni volta si somma al risultato nuovo
        risultato = risultato + lista[i];

    }  
    //quando richiamo la funzione trasmettiamo il risultato come dato 
    return risultato;
}