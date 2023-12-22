# pip install pyzmq cbor keyboard
from zmqRemoteApi import RemoteAPIClient
from zmqRemoteApi_IPv6 import RemoteAPIClient




#client = RemoteAPIClient('localhost', 23000)
client = RemoteAPIClient('2001:288:6004:17:2023:cada:0:6', 23000)

print('Program started')
sim = client.getObject('sim')
sim.startSimulation()
print('Simulation started')



shape = sim.getObject('/Sphere')
sensor = sim.getObject('/sensor')

 
while(True):
    r =sim.readProximitySensor(sensor)
    if r[0]==1 :
        sim.addForceAndTorque(shape,[1,0,0],[0,0,0])

