valor_casa = float(input('Informe o Valor da Casa:'))
valor_salario = float(input('Informe o valor do Salario:'))
anos = int(input('Informe quantos anos para pagar:'))
valor_prestacao = valor_casa / (anos*12)
if valor_prestacao <= valor_salario*0.3:
    print('Emprestimo APROVADO, vc vai pagar {:.2f} em {} meses'.format(valor_prestacao,(anos*12)))
else:
    print('Emprestimo Negado')

