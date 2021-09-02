import network
import time

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

available_networks = {i: str(network[0]) for i, network in enumerate(wlan.scan())}

# print available networks
print("Available networks:\n")
for i, network in available_networks.items():
    print("{}. {}".format(i, network))

network_id = int(input("Please select your network number id: "))
network_name = available_networks[network_id]
network_password = input("Enter passwork for {}: ".format(network_name))

print("Connecting to {}...".format(network_name))

wlan.connect(network_name, network_password)
time.sleep(1)

if wlan.isconnected():
    print("Connection sucessful!")
else:
    print("Try again")


