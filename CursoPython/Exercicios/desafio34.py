print('Aumento Salario')
n1 = float(input('Informe o Salário:'))
if n1>1250:
    print('Seu aumento será de 10% : {}'.format(n1+n1*0.1))
else:
    print('Seu aumento será de 15% : {}'.format(n1+n1*0.15))