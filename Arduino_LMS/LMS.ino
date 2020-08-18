
#include <FirebaseArduino.h>
#include <DHT.h>                           //DHT Library
#include <ESP8266WiFi.h>                  // ESP8266 WiFi library
#define FIREBASE_HOST "livestock-monitoring-system.firebaseio.com”  //host
#define FIREBASE_AUTH "91ImeJ2JNjFXMXxAj0FhxTYdZf1cu75wA38sJGJ9"    //auth     
#define FIREBASE_HOST "livestock-monitoring-system.firebaseio.com"  //firebase_host
        
#define WIFI_SSID "GuFuy"                      // wifi name 
#define WIFI_PASSWORD "56723367"        //password of wifi 
        
#define DHTPIN D4            	// what digital pin we're connected to
#define DHTTYPE DHT11   		// select dht type as DHT 11 or DHT22
#define relay D4
#define relay 0
DHT dht(DHTPIN, DHTTYPE);                                                     
    
        void setup() 
        {
          Serial.begin(9600);
          delay(1000);                
          WiFi.begin(WIFI_SSID, WIFI_PASSWORD);    
          Serial.print("Connecting to ");
          Serial.print(WIFI_SSID);
          while (WiFi.status() != WL_CONNECTED) 
          {
            Serial.print(".");
            delay(500);
          }
          Serial.println();
          Serial.print("Connected to ");
          Serial.println(WIFI_SSID);
          Serial.print("IP Address is : ");
          Serial.println(WiFi.localIP());          			  //print local IP address
          Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);    	 // connect to firebase
          dht.begin();                          		    //Start reading dht sensor
        }
        
        void loop() 
        { 
          float h = dht.readHumidity();       // Reading temperature or humidity 
          float t = dht.readTemperature();   // Read temperature as Celsius (the default)
            
          if (isnan(h) || isnan(t))
            {  // Check if any reads failed and exit early (to try again).
            Serial.println(F("Failed to read from DHT sensor!"));
            return;
            }
          
          Serial.print("Humidity: ");  Serial.print(h);
          String fireHumid = String(h) + String("%");    //convert integer humidity to string humidity 
          Serial.print("%  Temperature: ");  Serial.print(t);  Serial.println("°C ");
          String fireTemp = String(t) + String("°C");	 //convert integer temperature to string temperature
          delay(4000);
          
         Firebase.setFloat("/DHT/Humidity", h);         //setup path and send readings
         Firebase.setFloat("/DHT/Temperature", t);        //setup path and send readings
           
        }
        
