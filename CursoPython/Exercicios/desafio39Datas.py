from datetime import date

data = int(input('Digite o ano de nascimento:'))
data_atual = date.today().year
anos = data_atual-data
if anos == 18:
    print('Vc tem {} anos, pode se alistar'.format(anos))
elif anos > 18:
    print('Vc tem {} anos,ja deveria ter se alistado a {} anos'.format(anos,(anos-18)))
else:
    print('Vc tem {} anos,pode se alista daqui a {} anos'.format(anos,(18-anos)))

