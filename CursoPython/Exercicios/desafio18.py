import math
print('{:=^50}'.format("ANGULOS"))
n1 = float(input('Digite o ângulo:'))
sen = math.sin(math.radians(n1))
cos = math.cos(math.radians(n1))
tan = math.tan(math.radians(n1))
print('O ângulo {} possui seno = {:.4f},cosseno = {:.4f} e tangente = {:.4f}'.format(n1,sen,cos,tan))