def maior(* numeros):
    maior = 0
    for i in numeros:
        if i > maior:
            maior = i
    print(f'o Maior é {maior}')


maior(10, 2, 3, 4, 5, 9, 35, 67)
