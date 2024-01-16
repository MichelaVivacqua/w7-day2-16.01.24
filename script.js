// Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome. A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente). Mostra sopra l’input field il valore precedentemente salvato, se presente.
const textarea = document.getElementById("inputText");

const saveButton = document.getElementsByClassName("btn-primary")[0];
const deleteButton = document.getElementsByClassName("btn-warning")[0];

saveButton.addEventListener("click", function () {
  console.log("cliccato salva!");

  const content = textarea.value;
  console.log(content);
  localStorage.setItem("notepad-memory", content);
  alert("contenuto salvato!");
  mostraNome();
});

deleteButton.addEventListener("click", function () {
  console.log("cliccato reset!");
  textarea.value = "";
  localStorage.removeItem("notepad-memory");
  alert("memoria eliminata!");
  mostraNome();
});

const mostraNome = function () {
  const nomeSalvato = localStorage.getItem("notepad-memory");
  const h3MostraNome = document.getElementById("savedName");
  if (nomeSalvato) {
    h3MostraNome.innerText = nomeSalvato;
  } else {
    h3MostraNome.innerText = "";
  }
};

mostraNome();

// Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo.

document.addEventListener("DOMContentLoaded", function () {
  let tempoTrascorso;
  // Controlla se esiste già un valore nel sessionStorage
  if (sessionStorage.getItem("tempo_trascorso")) {
    // Recupera il valore salvato
    tempoTrascorso = parseInt(sessionStorage.getItem("tempo_trascorso"));
  } else {
    // Se non esiste, inizia da zero
    tempoTrascorso = 0;
  }

  // Funzione per aggiornare il contatore ad ogni secondo
  const aggiornaContatore = function () {
    // Aggiorna il valore e il sessionStorage
    tempoTrascorso++;
    sessionStorage.setItem("tempo_trascorso", tempoTrascorso);

    // Aggiorna il testo nella pagina
    document.getElementById("contatore").innerText = tempoTrascorso;
  };

  // Chiamata alla funzione ogni secondo
  setInterval(aggiornaContatore, 1000);

  // Mostra il valore iniziale del contatore
  document.getElementById("contatore").innerText = tempoTrascorso;
});
