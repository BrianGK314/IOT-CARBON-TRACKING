import serial
import time

ser = serial.Serial('COM3', 9800, timeout=2)
for i in range(100):
    line =  ser.readline()
    print(line.decode())
