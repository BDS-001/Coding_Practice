class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        collection = []
        
        def generate_pairs(opened=0,closed=0,combo=''):
            if len(combo) == n * 2:
                if combo in collection:
                    return
                collection.append(combo)
                return
            
            if opened < n:
                generate_pairs(opened + 1, closed, combo + '(')

            if closed < opened:
                generate_pairs(opened, closed + 1, combo + ')')
        
        generate_pairs()
        return collection
                