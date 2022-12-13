Pre-requisiti per l'utilizzo dell'applicazione:

1) Installare node js (v14.18.2)

2) Installare un client MySql (es: MySqlWorkbench)

3) Installare le dipendenze di node utilizzando il comando "npm install"

4) Impostare le credenziali MySql nel file .env. L'ambiente di default è localhost. 
    Non è necessario specificare la porta, viene usata la porta 3306 di default.
    Nel file .env è però possibile specificare un ambiente differente, modificando le opportune variabili

5) Definire il model oppure importarlo: 
    - Definire il database "collegapunti". Aggiungere l'istruzione 
        Point.sync() all'interno del metodo sequelize.define(), nello script point.js.
    - nella cartella mysql-export è presente un file .sql self-contained. Importarlo tramite tool SqlServer
        del client MySql installato in precedenza. Nel model saranno già presenti alcuni punti.

6) Lanciare l'app. L'app si avvia sulla porta specificata nel file .env

7) Utilizzare il comando npm start per lanciare l'applicazione