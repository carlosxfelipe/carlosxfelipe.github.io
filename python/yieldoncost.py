print('-=-' * 20)
print('Calculando Yield on Cost (YOC) de FIIs')
print('-=-' * 20)

cmaquisicao = float(input('Qual seu custo médio de aquisição? '))
cmaquisicao * 100
rendimento = float(input('Quanto rendeu no último mês? '))
rendimento * 12
yocost = rendimento / cmaquisicao * 100
print('Seu yield on cost foi de {:.3f}% nesse mês.'.format(yocost))
print('A rentabilidade anualizada seria {:.3f}%.'.format(yocost * 12))
print('Lembre-se de que FII é renda variável e, portanto, a renda varia.')

# desenvolvido por carlos felipe araújo @carlosxfelipe
