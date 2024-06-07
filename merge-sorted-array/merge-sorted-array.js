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