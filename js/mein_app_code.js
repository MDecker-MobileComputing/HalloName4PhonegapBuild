
/**
 * Globale Variable (Flag), anhand der die Event-Handler-Methode 
 * erkennen kann, ob das "deviceready"-Event schon aufgetreten
 * ist.
 */
var deviceReadyWarSchon = false;

document.addEventListener("deviceready", onDeviceReadyCallback, false);

/**
 * Callback-Funktion für das Event "deviceready". 
 * Die Cordova-Funktionen (z.B. Plugins) stehen erst 
 * nachdem dieses Event "gefeuert" wurde zur Verfügung.
 */
function onDeviceReadyCallback() {
  deviceReadyWarSchon = true;
  console.log("DeviceReady-Event empfangen");
}


/**
 * Event-Handler für den Button.
 * Begrüßt den Nutzer mit dem eingegebenen Namen.
 *
 * Verwendet Plugin <tt>cordova-plugin-dialogs</tt>, siehe auch 
 * <a href="https://www.npmjs.com/package/cordova-plugin-dialogs">diese Doku-Seite</a>.
 */
function meinEventHandler() {
    
    if (deviceReadyWarSchon === false) {
        
        alert("Button zu früh gedrückt, Cordova ist noch nicht soweit.");
        // Plugin "cordova-plugin-dialogs" steht noch nicht zur
        // Verfügung, deshalb normale "alert()"-Funktion verwenden.
        
    } else {
        
          var textfeldMitName = document.getElementById("textfeld_mit_name");	
          if (!textfeldMitName) {
              navigator.notification.alert( "Textfeld-Objekt nicht gefunden.",  // Nachricht
                                            null,                               // Callback-Funktion (nicht benötigt)
                                            "Interner Fehler",                  // Titel
                                            "Zur Kenntnis genommen" );          // Button
              return;
          }
          
          var derName = textfeldMitName.value.trim();
          console.log("Name eingegeben: \"" + derName + "\"");
          
          if (derName.length === 0) {
              navigator.notification.alert( "Leeren Namen eingegeben.",  // Nachricht
                                            null,                        // Callback-Funktion (nicht benötigt)
                                            "Ungültige Eingabe:",        // Titel
                                            "Zur Kenntnis genommen" );   // Button             
              return;
          }
        
          navigator.notification.alert( "Hallo " + derName + "!",  // Nachricht
                                        null,                      // Callback-Funktion (nicht benötigt)
                                        "Ein Alert",               // Titel
                                        "Weitermachen" );          // Button           
    }    
}
