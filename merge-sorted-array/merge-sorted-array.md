# Intuition
O desafio é fazer o merge de duas arrays de inteiros, `nums1` e `nums2`, que estão ordenadas em ordem não decrescente. Os tamanhos das listas são representados pelos inteiros `m` e `n`, respectivamente. A matriz final ordenada não deve ser retornada pela função, mas sim armazenada dentro da matriz nums1. Para acomodar isso, nums1 tem um comprimento de `m + n`, onde os primeiros `m` elementos denotam os elementos que devem ser mesclados e os últimos `n` elementos são definidos como 0 e devem ser ignorados.

# Approach
1. A função itera sobre os dois arrays de trás para frente, então usamos o `(m > 0 && n > 0)`, dado que m e n representam o número de elementos em `nums1` (3) e `nums2` (3), respectivamente.
2. Interamos em cada elemento dos dois arrays a partir do número de elementos, fazendo uma operação de comparação e atribuição a cada iteração.
3. Atribuímos o maior valor dentre as comparações para o final do array nums1 `(nums1.length == m + n)` e decrementamos, até que todos os elementos sejam comparados.
4. Se ainda houver elementos restantes em nums2 (ou seja, n > 0), eles são copiados para nums1.

# Complexity

O número total de operações é a soma dos tamanhos dos dois arrays, portanto uma operação O(m + n).

# Code
```
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3

var merge = function (nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1]
      m--
    } else {
      nums1[m + n - 1] = nums2[n - 1]
      n--
    }
  }

  while (n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n--;
  }
}

merge(nums1, m, nums2, n)

```