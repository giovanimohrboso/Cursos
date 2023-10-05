def linha(tam=42):
    print('*' * tam)


def cabecalho(msg):
    linha()
    print(msg.center(42))
    linha()

def menu(lista):
    print('Menu'.center(42))
    i = 1
    for item in lista:
        print(f'{i} - {item} ')
        i += 1
    opcao = 0
    try:
        opcao = int(input('Digite a opção:'))
        if opcao > (i - 1):
            print('Opção Invalida')
    except:
        print('ERRO')
    return opcao
