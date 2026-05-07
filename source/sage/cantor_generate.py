def S1(L):
    return [1/3 * n for n in L]

def S2(L):
    return [1/3 * n + 2/3 for n in L]

def S(L):
    return S1(L) + S2(L)