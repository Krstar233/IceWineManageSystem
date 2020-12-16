import csv

fileHeader = "./data/order"
with open(fileHeader+'.csv')as f:
    f_csv = csv.reader(f)
    l = []
    for row in f_csv:
        l.append(row)
    json = '['
    for row in l[1:]:
        json += "{"
        for i in range(len(row)):
            if (i != 0):
                json += ","
            json += "\"" + l[0][i] + "\":\"" + row[i] + "\""
        json += "},"
    json = json[0:len(json)-1]
    json += ']'
    f = open(fileHeader+'.json', 'w')
    f.write(json)
    f.close()