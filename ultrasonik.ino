#define echoPin 7
#define trigPin 8
#define LEDPin 13
 
int maximumRange = 10;
int minimumRange = 00;
long duration, distance;
 
void setup() {
Serial.begin (9600);
//deklarasi pin
pinMode(trigPin, OUTPUT);
pinMode(echoPin, INPUT);
pinMode(LEDPin, OUTPUT);
}
 
void loop() {

digitalWrite(trigPin, LOW);delayMicroseconds(2);
digitalWrite(trigPin, HIGH);delayMicroseconds(10);
digitalWrite(trigPin, LOW);
duration = pulseIn(echoPin, HIGH);
 
distance = duration/58.2;
 
if (distance >= maximumRange || distance <= minimumRange)
{
Serial.println("0");digitalWrite(LEDPin, HIGH);
delay(1000);
}
else {
 
Serial.println(distance);
digitalWrite(LEDPin, LOW);

delay(80);
  }
}
 
