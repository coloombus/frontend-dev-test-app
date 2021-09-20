# Coloombus Frontend Dev Test

Ciao! L'obiettivo di questo test è farci vedere chi sei dal punto di vista della scrittura di codice: per questo motivo non esistono risposte giuste o sbagliate, il risultato potrebbe magari diventare argomento di discussione durante il colloquio.

In questo repository abbiamo creato una SPA (Single Page Application) usando il framework [Vue](https://vuejs.org/v2/guide/).

Entrando nel merito del test, l'idea è quella di avere una pagina dell'app (`/#/users`) che mostri una lista di utenti, le cui informazioni verranno ottenute interrogando un'API web: a tal proposito abbiamo creato un mock dell'API (ovvero un'imitazione di un'API server-side che fornisce al client, una risposta fittizia ma del tutto simile nel formato a quella di un'API vera e propria).

Questa API mock è implementata tramite un [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#the_premise_of_service_workers): in questo modo, qualunque metodo tu scelga per eseguire una richiesta HTTP dall'app, questa verrà intercettata dal service worker e otterrà la risposta "mock" dell'API `GET /users`. In questo file del progetto puoi vedere la sua impementazione: `src/mocks/handlers.js`.

Il file del progetto che va sviluppato si trova in `src/views/Users.vue`: bisogna creare una lista non-ordinata di elementi per ciascun utente che troviamo nella risposta dell'API mock, applicando delle classi e possibilmente uno stile in modo tale che sia consultabile da un dispositivo mobile o desktop per esempio.

Per aiutarti durante lo sviluppo e verificare che i requisiti del test siano soddisfatti, abbiamo creato un [test end to end - e2e](https://vuejs.org/v2/guide/testing.html#End-to-End-E2E-Testing) (`tests/e2e/specs/test.js`).

Quando riterrai che il tuo codice è completo, magari dopo aver controllato che il test e2e è verde, fai una commit, la tua implementazione base sarà pronta.

In aggiunta ci piacerebbe vedere come faresti evolvere il codice per migliorarlo, migliorandone il design e/o le funzionalità.

Una volta che ti sentirai soddisfatto del tuo codice, perché rispecchia la pasta di cui sei fatto, inviaci il link del tuo repository pubblico.

Se durante lo sviluppo, ti dovessero venire in mente domande o eventuali modifiche o possibili miglioramenti, non esitare a inviarcele insieme alla soluzione del test.

## Per eseguire il setup del progetto
```
yarn install 

// oppure, se usi npm

npm install
```

### Durante lo sviluppo, con l'hot-reload del codice
```
yarn serve

// oppure, se usi npm

npm run serve
```

### Per eseguire il test end to end (e2e)
```
// Va eseguito in un'altra console, rispetto a quella dove hai lanciato yarn serve

yarn test:e2e

// oppure, se usi npm

npm run test:e2e
```
