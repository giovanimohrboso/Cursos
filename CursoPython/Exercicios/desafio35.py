print('Formação Triângulo')
n1 = int(input('Informe a primeira reta:'))
n2 = int(input('Informe a segunda reta:'))
n3 = int(input('Informe a terceira reta:'))
if n1>n2:
    if n1>n3:
        if n1<(n2+n3):
            print('1-Forma triangulo.')
        else:
            print('2-Não Forma Triangulo.Reveja')
    else:
        if n3<(n1+n2):
            print('3-Forma triangulo.')
        else:
            print('4-Não Forma Triangulo.Reveja')
else:
    if n2>n3:
        if n2<(n1+n3):
            print('5-Forma triangulo.')
        else:
            print('6-Não Forma Triangulo.Reveja')
    else:
        if n3<(n1+n2):
            print('7-Forma triangulo.')
        else:
            print('8-Não Forma Triangulo.Reveja')