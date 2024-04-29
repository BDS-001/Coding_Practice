class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'
        
        numa = []
        def say(step, recursion):
            if step > n:
                numa.append(recursion)
            elif step == 1:
                say(step + 1, '1')
            else:
                tmp = ''
                count = 0
                current = None
                for num in recursion:
                    if current == None:
                        current = num
                        count += 1
                    elif num == current:
                        count += 1
                    else:
                        tmp += f'{count}{current}'
                        current = num
                        count = 1
                tmp += f'{count}{current}'
                say(step + 1, tmp)

                
        say(1, '')        
        return numa[0]