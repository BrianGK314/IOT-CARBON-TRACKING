int bled = 12;
int smoke = A5;
int buzzer = 10;
int sensorThree = 510;


void setup() {
  pinMode(bled,OUTPUT);
  pinMode(smoke,OUTPUT);
  pinMode(buzzer,OUTPUT);
  Serial.begin(9600);
}

void loop() {

  int analogSenor = analogRead(smoke);
  Serial.print(analogSenor);

  if(analogSenor > sensorThree){
    digitalWrite(bled,HIGH);
    tone(buzzer,1000,200);
  }
  else{
    digitalWrite(bled,LOW);
    Serial.println("Emission within Threshhold");
  }
  delay(1000);

}
