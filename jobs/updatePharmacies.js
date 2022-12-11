const cronJob = require('cron').CronJob;
//interfaccia salvataggio base bati
//repository per il recupero dei dati da internet

const myJob = new cronJob('"30 0 * * *"',() => {
    //richiedi JSON
    //confronta lista nuova con lista attuale
    //aggiungi nuove farmacie alla lista
 },() => {
 },
 true
);

