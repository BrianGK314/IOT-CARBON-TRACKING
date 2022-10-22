#ARDUINO

import serial
import time
import os
import subprocess

ser = serial.Serial('COM3', 9800, timeout=2)
for i in range(100):
    line =  ser.readline()
    co2_level =  int(line.decode())
    print(co2_level)

#ARDUINO
    mqtttopic='outTopic' #Example: 'outTopic'
    iterations=10
    wait=5
    fake=30
    # payload ='{\"humidity\":21}'
    region='ap-northeast-1' #Example: 'us-east-1'
    profile='default'

    bash= """aws iot-data publish --topic "outTopic" --cli-binary-format raw-in-base64-out --payload "{\"temperature\":40,\"humidity\":20}" --profile "default" --region "ap-northeast-1" """

    # tasks = ['aws','iot-data','publish','--topic',r'"{}"'.format(mqtttopic),'--cli-binary-format','raw-in-base64-out','--payload',r'"{{\"humidity\":{}}}"'.format(co2_level),r'--profile "{}"'.format(profile),r'--region "{}"'.format(region)]
    tasks = ['aws','iot-data','publish','--topic',r'"{}"'.format(mqtttopic),'--cli-binary-format','raw-in-base64-out','--payload',r'"{{\"airquality\":{}}}"'.format(co2_level),r'--profile "{}"'.format(profile),r'--region "{}"'.format(region)]



    new= " ".join(tasks)


    try:
        # print((bash))
        # print((new))
        # print("starting")
        subprocess.run(new, shell=True)
        # print("done!!!")
    except:
        print("couldnt excecute")
