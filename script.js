class bottCost {
    constructor(bottiglie, costi, prezzo) {
        this.bottiglie = bottiglie;
        this.costi = costi;
        this.prezzo = prezzo;
    }
}

/*function aggTab() {
    
    alert("Ordine effettuato!");
    let prezzo = 0;

    const cl150 = document.getElementById('150cl');
    const cl100 = document.getElementById('100cl');
    const cl50 = document.getElementById('50cl');
    const cl33 = document.getElementById('33cl');

    console.log(cl150.naturalWidth);
        
    if (cl150 && cl150.naturalWidth === 225) {
        prezzo = 0.60;
    } else if (cl100 && cl100.naturalWidth === 225) {
        prezzo = 0.50;
    } else if (cl50 && cl50.naturalWidth === 225) {
        prezzo = 0.35;
    } else if (cl33 && cl33.naturalWidth === 225) {
        prezzo = 0.20;
    }
    
    const inputElement = document.getElementById('dataInput');
    const inputValue = inputElement.value;
    const inputElement2 = document.getElementById('dataInput2');
    const inputValue2 = inputElement2.value;
    let prezzoFinale = prezzo * inputValue2;
    
    if (inputValue.trim() !== '') {
        const newDataItem = new bottCost(inputValue, inputValue2, prezzoFinale);

        // Aggiungi riga alla tabella
        const tableBody = document.querySelector('#mia-tabella tbody');
        const newRow = tableBody.insertRow();
        const cell = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        cell.textContent = inputValue;
        cell2.textContent = inputValue2;
        cell3.textContent = prezzoFinale; 
        
        inputElement.value = '';
        inputElement2.value = '';

        }
}   

*/

function aggTab() {
    // Dichiarazione e inizializzazione della variabile prezzo
    let prezzo = 0;
    
    // Funzione per controllare la larghezza delle immagini e calcolare il prezzo
    function checkWidth() {
        // Selezioniamo gli elementi immagine
        const cl150 = document.getElementById("150cl");
        const cl100 = document.getElementById("100cl");
        const cl50 = document.getElementById("50cl");
        const cl33 = document.getElementById("33cl");

        // Verifichiamo la larghezza delle immagini e impostiamo il prezzo
        if (cl150 && cl150.naturalWidth === 225) {
            prezzo = 0.60;
        } else if (cl100 && cl100.naturalWidth === 225) {
            prezzo = 0.50;
        } else if (cl50 && cl50.naturalWidth === 225) {
            prezzo = 0.35;
        } else if (cl33 && cl33.naturalWidth === 225) {
            prezzo = 0.20;
        }
        
        // Calcoliamo il prezzo finale qui dopo aver verificato la larghezza delle immagini
        const inputElement = document.getElementById('dataInput2');
        const inputValue2 = inputElement.value;
        const prezzoFinale = prezzo * inputValue2;
        
        // Output di debug per verificare il prezzo finale
        console.log("Prezzo finale:", prezzoFinale);
        
        return prezzoFinale; // Restituiamo il prezzo finale
    }

    // Chiamiamo la funzione per controllare la larghezza delle immagini e calcolare il prezzo
    const prezzoFinale = checkWidth();
    
    // Ottieni il valore dell'input
    const inputElement = document.getElementById('dataInput');
    const inputValue = inputElement.value;

    // Verifica se l'input non è vuoto
    if (inputValue.trim() !== '') {
        // Aggiungi riga alla tabella
        const tableBody = document.querySelector('#mia-tabella tbody');
        const newRow = tableBody.insertRow();
        const cell = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        cell.textContent = inputValue;
        cell2.textContent = inputValue2;
        cell3.textContent = prezzoFinale.toFixed(2); // Arrotondiamo a due decimali
        
        // Reset dell'input
        inputElement.value = '';
        
        // Mostra un messaggio di conferma
        alert("Ordine effettuato!");
    }
}

function calc(i){
    switch(i) {
        case 1:
            alert("Il calcio è l'elemento chimico di numero atomico 20 e il suo simbolo è Ca. È il terzo elemento del gruppo 2 (metalli alcalino terrosi) del sistema periodico, collocato tra il magnesio e lo stronzio; si trova nel quarto periodo e fa parte del blocco s.");
            break;
        case 2:
            alert("I cloruri sono sali colorati o incolori, con diverse strutture cristalline. I cloruri sono quasi tutti solubili in acqua; un'eccezione (comunemente sfruttata in analisi chimica) è il cloruro d'argento. Essi sono inoltre solubili nei solventi polari. I cloruri possiedono punti di fusione ed ebollizione molto alti. Fusi o disciolti in acqua sono buoni conduttori elettrici. Sono inoltre elementi volatili.");
            break;
        case 3:
            alert("Il magnesio è l'elemento chimico della tavola periodica degli elementi che ha come simbolo Mg e come numero atomico 12. È il secondo elemento del gruppo 2 (metalli alcalino terrosi) del sistema periodico, collocato tra il berillio e il calcio; si trova nel terzo periodo e fa parte del blocco s.[2] È un metallo leggero e molto reattivo; nei suoi composti mostra quasi esclusivamente stato di ossidazione +2.");
            break;
        case 4:
            alert("I nitrati, composti in cui è presente lo ione nitrato, sono i sali dell'acido nitrico. Sono tutti molto solubili in acqua e per questo motivo sulla crosta terrestre si possono trovare solo in territori estremamente aridi. I più diffusi in natura sono il nitrato di sodio e il nitrato di potassio.");
            break;
        case 5:
            alert("Il sodio è l'elemento chimico della tavola periodica degli elementi che ha come simbolo Na (dal latino Natrium) e come numero atomico ha 11. È un metallo soffice, ceroso, argenteo, reattivo. Appartiene alla categoria dei metalli alcalini che è abbondante nei composti naturali. È altamente reattivo, brucia con una fiamma gialla, si ossida a contatto con l'aria e reagisce violentemente con l'acqua.");
            break;
        case 6:
            alert("La silice, o anche anidride silicica o diossido di silicio secondo IUPAC, è un composto del silicio la cui formula chimica è SiO2. È una pura polvere cristallina bianca che impartisce all'acqua una lieve acidità: una sospensione di 40 g in un litro di acqua ha pH compreso tra 3,7 e 4,7.");
            break;
        case 7:
            alert("Il potassio (dal latino scientifico potassium, derivante a sua volta da potassa) è l'elemento chimico di numero atomico 19. Il suo simbolo è K e deriva dall'iniziale del nome neolatino kalium. È un metallo alcalino tenero, bianco-argenteo che si trova in natura combinato con altri elementi sia nell'acqua di mare sia in molti minerali. Si ossida rapidamente all'aria ed è molto reattivo, specie con l'acqua; somiglia molto al sodio per il suo comportamento chimico. Trattasi di un elemento facilmente infiammabile e corrosivo.");
            break;
        case 8:
            alert("Lo ione idrogenocarbonato, noto anche come monoidrogenocarbonato, nonché col termine obsoleto di bicarbonato, è l'anione che deriva dalla prima dissociazione dell'acido carbonico. Secondo la nomenclatura IUPAC il nome è monoidrogenotriossocarbonato.");
            break;
    }

}

function visible(i) {
    if(i == 1){
        document.getElementById('table').hidden = true;
    } else{
        document.getElementById('table').hidden = false;
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
            const pmappa = document.querySelector('.pmappa');
            const mappa = document.querySelector('.mappa');

            let isHovered = false;

            // Aggiungi un gestore di eventi per il primo hover
            pmappa.addEventListener('mouseenter', function() {
                if (!isHovered) {
                    isHovered = true;
                    pmappa.style.maxHeight = '1000px';
                    mappa.style.height = '700px';
                    mappa.style.opacity = '1';
                }
            });
        });



