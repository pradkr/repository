
class Data:
    def __init__(self):
        pass

    def defcVar(self , name , id , email):
        self.__name = name
        self.__id = id
        self.__email = email

    def varValue(self):
        print(self.__name)
        print(self.__id)
        print(self.__email)

    def assignName(self, name):
        self.__name=name

    def getName(self):
        return self.__name;

data = Data()
#data.__name="Mohan"
#print(data.__name)

 
import csv
fp=open('some.csv', 'w', newline=''):
    writer = csv.writer(fp)
    writer.writerows(someiterable)



import csv
fp=open('some.csv', newline=''):
   reader = csv.reader(f)
   for row in reader:
       print(row)

 