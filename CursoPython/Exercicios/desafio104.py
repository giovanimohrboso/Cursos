def leiaInt(msg):
    ok = False
    while True:
        n = str(input(msg))
        if n.isnumeric():
            ok = True
            break
        else:
            print(f'\033[0;31mERRO!!!Deve ser numerico\033[m')
    return n


n = leiaInt('Digite um Numero:')
print(f'Vc digitou o numero {n}')
