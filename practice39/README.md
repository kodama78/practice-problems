### Wave Sorting

Given an array of unsorted numbers, 
- easy challenge - determine if the numbers are arranged in such a way as to determine if the numbers form a successive pattern.  IE all successive numbers are at the same level or higher.  For example, 1, 1, 3, 5, 7 would be true.  1, 3, 1, 5, 7 would be false.
- middle challenge - determine if the numbers COULD be arranged into a wave:  for example  1, 2, 5, 4, 3   with a peak between lower numbers.  They do not have to start in this pattern.
- hard challenge - determine if the numbers could be arranged into a wave pattern.  Where large numbers are surrounded by smaller numbers.  They do not have to start in this pattern.
   - for example: 
       0, 1, 2, 4, 1, 4  could become 2, 0, 4, 1, 4, 1, which has high points at 2, 4, and 4  (2 > 0 < 4 > 1 < 4 > 10
- return true if it can be arranged that way, false if not.
- Sample arrays: 
    - 0, 1, 2, 4, 1, 1, 1
      - easy: false
      - middle: false
      - hard: false
    - 0, 4, 22, 4, 14, 4, 2
      - easy: false
      - middle: true
      - hard: true
      
    
