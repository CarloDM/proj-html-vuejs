Progetto HTML/VueJS
--------------------
nome tema: Food
--------------------
--------------------

layout & principle components:
1. Header
2. main
3. footer
------------------------------
step 1: layout macroaree. <br>
step 2: layout dettagliato sezioni. <br>
step 3: struttura dati.
------------------------------

layout macroaree:
dentro le 3 principali componenti header, main, footer:

layout dettagliato:
abbiamo ulteriori componenti corrispondenti le sezioni interne.

single components:
le singole componenti invece rappresentano quegli elementi che sono ripetibili e che ricevono i dati letti dallo store.
il più caratteristico è CardArticle che mediante la props type è possibile farsi restituire una formattazione differente in quanto v-if permette di far comparire o meno link, bottoni, testo contenuto nell articolo.

CardArticle a sua volta importa la singola componente photo utile per l omnipresenza in quasi tutte le sezioni utile anche per essere usata fuori dalla card.

struttura dati: 
l idea è che il sito composto prevalentemente da articoli disponga di un array principale contenente tutti gli oggetti articolo contenenti tutte le chiavi necessarie allo smistaggio nelle sezioni del main mediante funzioni di filtraggio secondo criteri specifici desiderati.
Ad esempio: le collection potrebbero non esser altro che il filtraggio dell array principale secondo la categoria dell' oggetto articolo.



NON FINITO:

- photo slider nel footer, sezione social in farm to table

- CardArticle e CardArticleBig sono accorpabili in un unico componente sempre sfruttando prop type.

- photo allo stesso modo andrebbe reso piu versatile.

- creazione di chiavi ( es: id, category) nell oggetto articolo più dettagliate per la gestione con funzioni

- funzioni di filtraggio, funzioni per limitare la lunghezza della string pharagraph.