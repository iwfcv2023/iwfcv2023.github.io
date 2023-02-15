import os
file_list = os.listdir(os.getcwd())
file_list.sort()
for i in file_list:
    print(i[6:-4].strip())
    # print(i)
    