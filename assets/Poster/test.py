import os
file_list = os.listdir(os.getcwd())
file_list.sort()
for i in file_list:
    t = i.replace(')','')
    # t.
    print(i)
    os.rename(i, t)
    