# import re
# import matplotlib.pyplot as plt
# import numpy as np
# import seaborn as sns
# from scipy.stats import norm

# # Function to extract round-trip time (RTT) values from the ping output
# def extract_rtt_values(file_path):
#     with open(file_path, 'r') as file:
#         content = file.read()

#     # Use a regular expression to find time values in the format 'time=45.9 ms'
#     rtt_values = [float(match.group(1)) for match in re.finditer(r'time=(\d+\.\d+) ms', content)]

#     return rtt_values

# # Replace 'YourIPAddress' with the actual IP address you've chosen
# ip_address = 'YourIPAddress'

# # Corrected file paths with double backslashes or raw string
# normal_rtt_values = extract_rtt_values(r'C:\Users\aggar\pingques3b.txt')

# # Filter out successful pings (those with non-zero RTT)
# normal_rtt_values = [rtt for rtt in normal_rtt_values if rtt > 0]

# # Create a histogram
# plt.figure(figsize=(10, 6))
# sns.histplot(normal_rtt_values, bins=30, kde=True, color='skyblue', stat='density')

# # Add a fitted normal distribution curve
# xmin, xmax = plt.xlim()
# x = np.linspace(xmin, xmax, 100)
# p = norm.pdf(x, np.mean(normal_rtt_values), np.std(normal_rtt_values))
# plt.plot(x, p, 'k', linewidth=2)

# plt.title('Ping Latency Distribution')
# plt.xlabel('Round-Trip Time (ms)')
# plt.ylabel('Density')
# plt.show()

import matplotlib.pyplot as plt

packet_sizes = [64, 256, 720, 1024, 1400]
average_rtt = [74.827, 159.807, 74.385, 132.338, 102.638]

plt.plot(packet_sizes, average_rtt, marker='o', linestyle='-')
plt.title('Packet Size vs Average RTT')
plt.xlabel('Packet Size (Bytes)')
plt.ylabel('Average RTT (ms)')
plt.grid(True)
plt.show()